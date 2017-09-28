/**
 * Created by ifelsc on 9/21/2017.
 */
var db = require('../../db');
var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

describe('making a post', function(){
    it('logs in and adds a new post', function(){
    //go to homepage
        browser.get('http://localhost:3001')
    
    //click 'Login'
        element(by.css('.login')).click()
        
    
    //fill out and submit login form
        element(by.model('username')).sendKeys('Kenny')
        element(by.model('password')).sendKeys('Benny')
        element(by.css('form .btn')).click()
        console.log("Log In Success");
    
    //submit a new post on the posts page
        var post = 'Test Post Successful' + Math.random()
        element(by.model('postBody')).sendKeys(post)
        element(by.css('form .btn')).click()
        console.log("Post Success, Post Body =  " + post);
        
    //the user should now see their post as the first post on the page
    browser.get('http://localhost:3002');
    expect(element.all(by.css('ul.posts li')).first().getText()).to.eventually.contain(post)
    
    })
    //delete the database after each test run
    //afterEach(function (){
      //  db.connection.db.dropDatabase()
    //})
})

describe('creating new account', function(){
    it('creates an account logs in', function(){
        //go to homepage
        browser.get('http://localhost:3002')

        //click 'Login'
        element(by.css('.register')).click()


        //fill out and submit registration form form
        element(by.model('username')).sendKeys('Tester123')
        element(by.model('password')).sendKeys('password')
        element(by.css('form .btn')).click()
        console.log("Registration Success");

        //login with new account
        //click 'Login'
        element(by.css('.login')).click()
        
        //fill out and submit login form
        element(by.model('username')).sendKeys('Tester123')
        element(by.model('password')).sendKeys('password')
        element(by.css('form .btn')).click()
        console.log("Log In Success");
        
        //user should see name as current logged in user
        //the user should now see their post as the first post on the page
        browser.get('http://localhost:3002');
        expect(element(by.css('.currentUser')).getText()).to.eventually.contain("Tester123")
        console.log("current User name matches log in name")

        //click Log Out
        element(by.css('.logout')).click()
        expect(element(by.css('.currentUser')).isPresent()).to.become(false)
        console.log("Logged Out")

    })


    //delete the database after each test run
    //afterEach(function (){
    //  db.connection.db.dropDatabase()
    //})
})