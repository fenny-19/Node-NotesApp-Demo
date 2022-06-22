# Node-NotesApp-Demo
CRUD operation and store data in json (using filesystem)

Used **yargs** for getting argument (argv) from command line :

#### add note using command

node app.js add --title="My note" --body="My first note" 

#### remove note using command

node app.js remove --title="My note"

#### list notes using command

node app.js list

#### read particular note using command

node app.js read --title="My note"

### Here add, remove, list and read are commands
### --title and --body are options
