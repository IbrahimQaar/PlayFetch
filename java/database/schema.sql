BEGIN TRANSACTION;



DROP TABLE IF EXISTS users, pet, playdate CASCADE;

CREATE TABLE users (
	user_id SERIAL,
	username VARCHAR NOT NULL UNIQUE,
	password_hash VARCHAR  NOT NULL,
	first_name VARCHAR NOT NULL,
    last_name VARCHAR ,
    metro_region VARCHAR NOT NULL,
	role VARCHAR NOT NULL,
	CONSTRAINT PK_users PRIMARY KEY (user_id)
);

CREATE TABLE pet (

    pet_id SERIAL, --how do we make this not start at 1
    pet_name VARCHAR NOT NULL,
    owner_id INT NOT NULL,
    owner_first_name VARCHAR,
    breed VARCHAR,
    age INT,
    bio VARCHAR,
    is_shy BOOLEAN,
    is_physical BOOLEAN,
    is_reactive BOOLEAN,
    play_setting VARCHAR,
    photo_url VARCHAR,
    CONSTRAINT PK_pet PRIMARY KEY (pet_id),
    CONSTRAINT FK_pet FOREIGN KEY (owner_id) REFERENCES users(user_id)

);

CREATE TABLE playdate (
    playdate_id SERIAL PRIMARY KEY,
    host_pet_id INT NOT NULL,
    guest_pet_id INT NOT NULL,
    location VARCHAR NOT NULL,
    playdate_date DATE NOT NULL,
    playdate_time TIME NOT NULL,
    status VARCHAR NOT NULL,
    CONSTRAINT fk_playdate_host FOREIGN KEY (host_pet_id) REFERENCES pet(pet_id),
    CONSTRAINT fk_playdate_guest FOREIGN KEY (guest_pet_id) REFERENCES pet(pet_id),
    CHECK (host_pet_id <> guest_pet_id),
    CHECK (status IN ('pending', 'accepted', 'declined', 'completed', 'canceled'))
);

ALTER SEQUENCE pet_pet_id_seq RESTART WITH 101;
ALTER SEQUENCE playdate_playdate_id_seq RESTART WITH 1001;


COMMIT TRANSACTION;