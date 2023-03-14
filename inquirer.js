'use strict';

const inquirer = require('inquirer');

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
    if (answer.user_choice === 'Signin') {
      signIn();
      console.log('Welcome to your signin');
    }
    else if (answer.user_choice === 'Signup') {
      signUp();
      console.log('Please enter your info to signup');
    }

  });

const signIn = () => {
  let user;
  inquirer
    .prompt([
      {
        name: 'userName',
        type: 'input',
        message: 'Please enter your username',
      },
      {
        name: 'pasword',
        type: 'password',
        message: 'Please enter your password',
      },
    ])
    .then((answer) => {
      user.username = answer.userName;
      user.password = answer.password;
      console.log(user);
    });
};

const signUp = () => {
  let user;
  inquirer
    .prompt([
      {
        name: 'userName',
        type: 'input',
        message: 'Please enter your username',
      },
      {
        name: 'pasword',
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
      user.username = answer.userName;
      user.password = answer.password;
      user.role = answer.role;
      console.log(user);
    });
};

const userMenu = () => {
  inquirer
    .prompt([
      {
        name: 'menu',
        type: 'list',
        message: 'Choose a task',
        choices: ['Search', 'Request order'],
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

const search = () => {};
const Create = () => {};
const Read = () => {};
const Update = () => {};
const Delete = () => {};



// const startInquire = () => {
//   inquirer
//     .prompt([
//       {
//         name: 'user_test',
//         message: 'Which would you like to choose?',
//         type: 'list',
//         choices: ['Proof of life A', 'Proof of life B'],
//       },
//     ])
//     .then((answer) => {
//       console.log('You have chosen ' + answer.user_test);
//     });
// };
