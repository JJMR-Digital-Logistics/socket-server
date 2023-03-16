# Software Requirements

## Vision

### What is the vision of this product?

* It's an Inventory Management System that utilizes full CRUD functionality, RBAC for users, Enquirer to provide a prompt for users to search through inventory, and Socket.io for users to request more inventory.

### What pain point does this project solve?

* It simplifies Inventory Management for large scale companies.

### Why should we care about your product?

* Poorly designed Inventory Management drains valuable time away from many companies, our product works to get less time searching through inventory and more time on production.

## Scope 

### IN - What will your product do

* This Management system will enable users to check inventory through a database, and make requests for more inventory when they need it by sending a request to Management.

### OUT - What will your product not do.

* Our Product will not feature a Graphical User Interface, and will not allow users without proper access to perform certain CRUD functions.

## Minimum Viable Product 

### What will your MVP functionality be?

* Server with a database filled with examples of inventory items, that the users can login to and read through.
* We want to enable users to communicate with Administrative staff through Inquirer and Socket.io.
* Users will send create requests with Inquirer, and send them to Admin through Socket.io. Once Admin receives those requests they will then make another request through Socket.io to a third party vendor.

### What are your stretch goals?

* Once Admin update inventory, Users can receive a notification of updated inventory.

## Stretch Goals

### What stretch goals are you going to aim for?

* Integrating Inquirer into our project.

## Functional Requirements

### List the functionality of your product. This will consist of tasks such as the following:

* A user can check inventory
* An Admin will have full CRUD Access
* A user can search through the database
* Our Database will accurately render inventory info.

## Data Flow

![Data Flow UML](./401%20Midterm%20Project%20UML.jpg)

## Non-Functional Requirements (301 & 401 only)

* Security - Accurate RBAC, we don't want all users to be able to update and delete items from the inventory.

* Usability - Since we're creating a backend server we won't have any sort of a GUI but we want our application to still be fully usable, and ready to connect to a front end in the future. We're doing this by implementing Enquirer which will let us use our terminal to perform search functions.

* Testing - Ensure our express server and handlers successfully pass any tests.