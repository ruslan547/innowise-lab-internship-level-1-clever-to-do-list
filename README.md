## Task

[Link to task](https://docs.google.com/document/d/1heFuihWrsw14bCpUdr6fla9ysqE6IrsobSMKAOpBiKA/edit)

[Demo on gh-pages](https://ruslan547.github.io/innowise-lab-internship-level-1-clever-to-do-list/#/signin)

## How to run the app

1. Clone the develop branch.

`$ git clone https://github.com/ruslan547/innowise-lab-internship-level-1-clever-to-do-list`

2. Go to the directory

`$ cd innowise-lab-internship-level-1-clever-to-do-list`

3. Install the npm modules

`$ npm install`

4. add the .env.local file with the firebase config

5. Run the app

`$ npm run start`


You will now have app running on localhost via port 3000  http://localhost:3000

## Database snapshot

```
   clever-to-do-list-29817-default-rtdb
    └── users
        └── userId
            └── tasks
                └── taskId
                    ├── checked
                    ├── date
                    ├── description
                    └── title
```

## Application stack

* react
* firebase
* node-sass
* react-router-dom
* eslint
* husky
* pinst
* prettier

## Folder structure

```
public
src
├── assets
│   ├── fonts
│   └── img
├── core
│   ├── components
│   │   ├── Alert
│   │   ├── AppProvider
│   │   ├── Button
│   │   ├── Form
│   │   ├── Loader
│   │   └── PrivateRoute
│   ├── constants
│   └── services
└── pages
    ├── Register
    │   └── components
    │       └── PasswordInput
    ├── Signin
    ├── Tasker
    │   └── components
    │       ├── Calendar
    │       ├── CalendarCard
    │       ├── Task
    │       └── TaskList
    └── TaskPage
        └── components
           ├── Actions
           ├── DateEditor
           ├── Datepicker
           ├── DatepickerHeader
           ├── DatepickerTable
           ├── DatepickerTableButton
           └── TaskEditor
```

## How to use it

The calendar is scrolled by the mouse wheel or arrows.
Select a day with a mouse click and add a new task with the button '+ Add New Task'
You can edit a task by double clicking on it.
You can edit status, title, discription and date.
Click the button 'date' to edit date.
Then click 'Save' or 'Update'.
If you want to delete task to click button 'Delete'.
