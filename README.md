# projectDnD

## Overview

    This is a personal project I am working on. I am compiling the skills I have learned and building a full stack app for Dungeons and 
    Dragons. This will let players and the Game Master keep track of all different aspects of the game.
    
### Objectives

* Build a relational database to store games and characters the different tables in the database are
     * Game - this stores game_id and game_name dependants of this table are:
          * Character this stores all the things about a character normally stored on a character sheet it shares the game id of the game               its associated with dependants of the field character_id are:
               -Skills: keeps track of the characters skills
               -Magic
               -equipment
               -Weapons
               -Attacks
* Build a server to let the game be live on multiple devices
* Test configuring the database in Node
* Build a dynamic front end UI to let the players easily manipulate characters traits such as:
     * Add or subtract HP
     * Use up spell slots
     * Add or remove equipment
     * Add new skills of feats
     

## IMPORTANT

This projects is still under contruction. There is no front end built for it yet. The back end and server is still being built and the database is currently being teseted in Node m
