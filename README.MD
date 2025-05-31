# Node.js CLI Contacts Manager

A simple command-line application for managing a contacts list using Node.js.

## Features

- List all contacts
- Get a contact by ID
- Add a new contact
- Remove a contact by ID

## Usage

Make sure you have [Node.js](https://nodejs.org/) installed.

Install dependencies:

```
npm install
```

### List all contacts

Displays the entire contacts list as a table:

```
node index.js -a list
```

### Get contact by ID

Displays the contact object by the specified ID, or `null` if not found:

```
node index.js -a get -i 05olLMgyVQdWRwgKfg5J6
```

### Add a new contact

Adds a contact and displays the newly created contact object:

```
node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22
```

### Remove a contact

Removes a contact by ID and displays the removed contact object, or `null` if not found:

```
node index.js -a remove -i AeHIrLTr6JkxGE6SN-0Rw
```

### Update a new contact

Updates a contact and displays the updated contact object:

```
node index.js -a update -i e6ywwRe4jcqxXfCZOj_1e -n Kiwi -e kiwi@gmail.com -p 322-22-22
```
