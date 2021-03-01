## Task

[Link to task](https://docs.google.com/document/d/1heFuihWrsw14bCpUdr6fla9ysqE6IrsobSMKAOpBiKA/edit)

## How to run the app

1. Clone the repository.

`$ git clone https://github.com/ruslan547/innowise-lab-internship-level-1-clever-to-do-list`

2. Go to the directory

`$ cd innowise-lab-internship-level-1-clever-to-do-list`

3. Install the npm modules

`$ npm install`

4. Run the app

`$ npm run start`

You will now have app running on localhost via port 3000  http://localhost:3000

## Database snapshot

>  - clever-to-do-list-29817-default-rtdb
>     - users
>          - userId
>              - tasks : "[{}, {}, {} ...]"
>          - userId
>              - tasks : "[{}, {}, {} ...]"
>
>          ...

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

* public
* src
	* components
		* Register
		* Signin
		* Tasker
			* Calendar
				* Card
			* TaskList
				* Task
		* TaskPage
			* Actions
			* DateEditor
			* TaskEditor
		* UI
			* Alert
            * Button
            * Datepicker
            	* Header
            	* Table
            * Form
            * Loader
            * PasswordInput
    * contexts
    * date
    * fonts
    * img

## Contribute

[Source Code](https://github.com/ruslan547/innowise-lab-internship-level-1-clever-to-do-list)

[Deploy](https://ruslan547.github.io/tasker)
