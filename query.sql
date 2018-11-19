CREATE database games;
CREATE table game(
game_id INT NOT NULL auto_increment,
game_name varchar(100),
round INT(0),
primary key(game_id)
);

---UUUID for identifyed

CREATE table characters(
character_id INT NOT NULL auto_increment,
character_name varchar(150),
character_class varchar(50),
character_level int,
character_background varchar(100),
character_race varchar(25),
alignment varchar(30),
exp int,
armor_class int,
initiative int,
speed int,
max_hp int,
current_hp int,
hit_dice varchar(5),
strength int,
dexterity int,
constit int,
intel int,
wisom int,
charism int,
skills_id INT,
equipment_id INT,
spells_id INT,
attack_id INT,
game_ID INT,
primary key(character_id)

);

CREATE TABLE skills (
id INT NOT NULL auto_increment,
skill_name varchar(20),
skill_mod INT,
character_id INT,
primary key(id)
);

CREATE TABLE equipment(
id INT NOT NULL auto_increment,
equip_name varchar(50),
stat_mod varchar(10),
heavy_boo bool,
character_id INT,
primary key (id)
);

CREATE TABLE weapons(
id INT NOT NULL auto_increment,
weapon_name varchar(50),
stat_mod varchar(10),
handed bool,
attack_mod int,
dd varchar(10),
character_id INT,
primary key(id));

ALTER TABLE characters ADD COLUMN spell_mod int;

CREATE TABLE spells (
spell_id INT NOT NULL auto_increment,
spell_name varchar(50),
spell_disc varchar(250),
spell_d varchar(10),
spell_range varchar(20),
touch bool,
character_id INT,
primary key(spell_id)
);

CREATE TABLE attck (
attack_id INT NOT NULL auto_increment,
attack_name varchar(30),
damage varchar(10),
prone bool,
character_id INT,
primary key(attack_id));

