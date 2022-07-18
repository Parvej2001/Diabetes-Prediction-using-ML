# -*- coding: utf-8 -*-
"""
Created on Wed Apr 20 11:41:18 2022

@author: PARVEJ SHAIKH
"""

from flask import Flask,request, url_for, redirect, render_template  ## importing necessary libraries
import pickle  ## pickle for loading model(Diabetes.pkl)
import pandas as pd  ## to convert the input data into a dataframe for giving as a input to the model

app = Flask(__name__)  ## setting up flask name

model = pickle.load(open("Diabetes.pkl", "rb"))  ##loading model


@app.route('/')             ## Defining main index route
def home():
    return render_template("index.html")   ## showing index.html as homepage

# @app.route('/diabetes')
# def app():
#     return render_template("diabetes.html")
    
@app.route('/predict',methods=['POST','GET'])  ## this route will be called when predict button is called
def predict(): 
    #int_features=[float(x) for x in request.form.values()]
    text1 = request.form['Pregnancies']      ## Fetching each input field value one by one
    text2 = request.form['Glucose Level'] 
    text3 = request.form['Blood Pressure']
    text4 = request.form['Skin Thickness']
    text5 = request.form['Insulin']
    text6 = request.form['BMI']
    text7 = request.form['Diabetes PF']
    text8 = request.form['Age']
 
    row_df = pd.DataFrame([pd.Series([text1,text2,text3,text4,text5,text6,text7,text8])])  ### Creating a dataframe using all the values
    print(row_df)
    prediction=model.predict_proba(row_df) ## Predicting the output
    output='{0:.{1}f}'.format(prediction[0][1], 2)    ## Formating output

    if output>str(0.5):
        return "you have a chance of diabetes"
        # return render_template('index.html',pred='You have chance of having diabetes.\nProbability of having Diabetes is {}'.format(output)) ## Returning the message for use on the same index.html page
    else:
       # return render_template('index.html',pred='You are safe.\n Probability of having diabetes is {}'.format(output)) 
        return "you are safe buddy!"



if __name__ == '__main__':
    app.run(debug=True)          ## Running the app as debug==True
