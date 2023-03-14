'use strict';

const inquirer = require('inquirer');

let localUser;

inquirer
  .prompt([
    {
      name: 'user_choice',
      type: 'list',
      message: 'Please login',
      choices: ['Signin', 'Signup'],
    },
  ])
  .then((answer) => {
    console.log(answer.user_choice);
    if (answer.user_choice === 'Signin') {
      clearLocalUser();
      signIn();
      //console.log('Welcome to your signin');
    }
    else if (answer.user_choice === 'Signup') {
      clearLocalUser();
      signUp();
      //console.log('Please enter your info to signup');
    }

  })
  .catch((error) => console.error(error));

const signIn = () => {
 
  inquirer
    .prompt([
      {
        name: 'userName',
        type: 'input',
        message: 'Please enter your username',
      },
      {
        name: 'password',
        type: 'password',
        message: 'Please enter your password',
      },
    ])
    .then((answer) => {
      localUser.username = answer.userName;
      localUser.password = answer.password;
      console.log(localUser);

      
    });
};

const signUp = () => {
  
  inquirer
    .prompt([
      {
        name: 'userName',
        type: 'input',
        message: 'Please enter your username',
      },
      {
        name: 'secret',
        type: 'password',
        message: 'Please enter your password',
      },
      {
        name: 'role',
        type: 'list',
        message: 'Choose a role',
        choices: ['user', 'writer', 'editor', 'admin'],
      },
    ])
    .then((answer) => {
      localUser.username = answer.userName;
      localUser.password = answer.secret;
      localUser.role = answer.role;
      console.log(localUser);


    });
};

const clearLocalUser = () => {
  localUser = {
    username: '',
    password: '',
    role: '',
  };
};

const userMenu = () => {
  inquirer
    .prompt([
      {
        name: 'menu',
        type: 'list',
        message: 'Choose a task',
        choices: ['Search', 'Request order', 'Display Inventory'],
      },
    ])
    .then((answer) => {
      console.log(answer.menu);
    });
};

const adminMenu = () => {
  inquirer
    .prompt([
      {
        name: 'menu',
        type: 'list',
        message: 'Choose a task',
        choices: ['Search', 'Create', 'Read', 'Update', 'Delete'],
      },
    ])
    .then((answer) => {
      console.log(answer.menu);
    });
};

// const search = () => {};
// const Create = () => {};
// const Read = () => {};
// const Update = () => {};
// const Delete = () => {};



