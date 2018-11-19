inquirer = require('inquirer');
mysql = require('mysql');

var choiceAr = [
    'View characters','Add character', 'Start game'
]

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "games"
})

connection.connect(function (err) {
    if (err) throw err;
    firstAsk()
})


    function firstAsk(){
    inquirer.prompt({

            name: 'new',
            type: 'confirm',
            message: 'Is this a new game or an existing game?'
        }
    ).then(function(data){
        if (data.new) {
            inquirer.prompt([{
                name: 'name',
                type: 'input',
                message: 'What do you want to call this game?'
            }])
            .then(function(data){
                
              connection.query('SELECT game_name FROM game', function(err,res){
                    for(i = 0; i < res.length; i++){
                        if (data.name == res[i].game_name){
                            console.log('this game already exists!')
                            return firstAsk()
                        }
                        else{
                            connection.query('INSERT INTO game SET ?',{
                                game_name : data.name,
                                round: 0
                            }, function(err, res){
                                console.log('your game has been added')
                            })
                        }
                    }
              })
                
                
            })
        }
        else{
           gameCheck()
        }
    }
)
      
    }
    
whatToDo = () => {
    inquirer.prompt({
        name: 'do',
        type: 'rawlist',
        choices: choiceAr
    })
} 


function gameCheck(){
    inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'What is he name of your game?'
    })
    .then(function(data){
        connection.query("SELECT game_name FROM game", function(err,res){
            for(i =0; i < res.length; i ++){
                if(data.name == res[i].game_name){
                    return whatToDo()
                }
                else{
                    console.log('I cant seem to find that game')
                    gameCheck()
                }
            }
        })
    })
}