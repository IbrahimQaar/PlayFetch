BEGIN TRANSACTION;
-- Users with diverse, realistic names and bcrypt password hashes (password = last name)
INSERT INTO users (username, password_hash, first_name, last_name, metro_region, role) VALUES
('elizabeth-brake', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Elizabeth', 'Brake', 'downtown', 'ROLE_USER'),
('mjohnson88', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Marcus', 'Johnson', 'university', 'ROLE_USER'),
('emily_chen', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Emily', 'Chen', 'northside', 'ROLE_USER'),
('davidw2024', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'David', 'Williams', 'southside', 'ROLE_USER'),
('sarah_p', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Sarah', 'Patel', 'westside', 'ROLE_USER'),
('alex_rodriguez', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Alex', 'Rodriguez', 'eastside', 'ROLE_USER'),
('jessica_lee', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Jessica', 'Lee', 'any', 'ROLE_USER'),
('mike_brown', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Mike', 'Brown', 'downtown', 'ROLE_USER'),
('priya_sharma', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Priya', 'Sharma', 'university', 'ROLE_USER'),
('carlos_lopez', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Carlos', 'Lopez', 'northside', 'ROLE_USER'),
('amanda_taylor', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Amanda', 'Taylor', 'southside', 'ROLE_USER'),
('james_kim', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'James', 'Kim', 'westside', 'ROLE_USER'),
('lisa_anderson', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Lisa', 'Anderson', 'eastside', 'ROLE_USER'),
('daniel_martinez', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Daniel', 'Martinez', 'any', 'ROLE_USER'),
('rachel_white', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Rachel', 'White', 'downtown', 'ROLE_USER'),
('kevin_nguyen', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Kevin', 'Nguyen', 'university', 'ROLE_USER'),
('megan_davis', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Megan', 'Davis', 'northside', 'ROLE_USER'),
('ryan_thomas', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Ryan', 'Thomas', 'southside', 'ROLE_USER'),
('natalie_wilson','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Natalie', 'Wilson', 'westside', 'ROLE_USER'),
('brandon_moore', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Brandon', 'Moore', 'eastside', 'ROLE_USER'),
('sophie_clark', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Sophie', 'Clark', 'any', 'ROLE_USER'),
('tyler_hall', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Tyler', 'Hall', 'downtown', 'ROLE_USER'),
('bandit_heeler', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Bandit', 'Heeler', 'university', 'ROLE_USER'),
('kenzie_crawford', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Kenzie', 'Crawford', 'northside', 'ROLE_USER'),
('silly_sav', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Savanna', 'May', 'southside', 'ROLE_USER'),
('roger_dearly', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Roger', 'Dearly', 'westside', 'ROLE_USER'),
('emily_elizabeth', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Emily Elizabeth', 'Howard', 'eastside', 'ROLE_USER'),
('ethan_reed', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Ethan', 'Reed', 'any', 'ROLE_USER'),
('andys_sis', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Zoe', 'Chong Sam', 'downtown', 'ROLE_USER'),
('mason_rivera', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'Mason', 'Rivera', 'university', 'ROLE_USER');

-- Pet data with proper ownership distribution and realistic characteristics
-- Most users have 1-2 pets, several have 3-4 pets for testing
INSERT INTO pet (pet_name, owner_id, owner_first_name, breed, age, bio, is_shy, is_physical, is_reactive, play_setting, photo_url) VALUES
-- User 1 (Ana): 2 pets
('Daisy', 1, 'Elizabeth', 'Black Labrador', 3, 'The sweetest girl who loves the snow', false, true, false, 'dog park', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755296156/qems04ckoxismqr6qjxq.jpg'),
('Bella', 1, 'Elizabeth', 'Border Collie', 2, 'Smart and playful herding dog', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755296291/spgouqqpvzxuji512kmb.avif'),

-- User 2 (Marcus): 4 pets (testing multiple pets)
('Max', 2, 'Marcus', 'German Shepherd', 5, 'Loyal and protective, loves gentle play', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755022509/j9nnecqkwsc2mc2egjqt.jpg'),
('Luna', 2, 'Marcus', 'Husky', 4, 'Energetic and loves to run around', false, true, false, 'dog park', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755296389/jta5eqa9co8iguo4fkzc.jpg'),
('Charlie', 2, 'Marcus', 'Beagle', 6, 'Calm and friendly, great with other dogs', false, false, false, 'home', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755296572/zj76vwlgibyigecixg8t.jpg'),
('Daisy', 2, 'Marcus', 'Poodle', 3, 'Gentle and well-behaved', true, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755023413/wtc4k197kgthwwzeekm0.jpg'),

-- User 3 (Emily): 1 pet
('Rocky', 3, 'Emily', 'Bulldog', 4, 'Sturdy and loves physical play', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755022687/g8znsg1huzqqizjw0qci.jpg'),

-- User 4 (David): 3 pets (testing multiple pets)
('Sadie', 4, 'David', 'Labrador', 2, 'Gentle and loves calm activities', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755276195/lhyuuf84hubpqhe6aeke.jpg'),
('Buddy', 4, 'David', 'Australian Shepherd', 3, 'Active and loves to play rough', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755276304/kqpsjn0u3afwfn73zzla.jpg'),
('Milo', 4, 'David', 'Jack Russell', 5, 'Small but energetic', false, true, false, 'dog park', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755296727/xx4b0clruqo6fzlynaxp.jpg'),

-- User 5 (Sarah): 2 pets
('Ruby', 5, 'Sarah', 'Cocker Spaniel', 4, 'Sweet and gentle nature', true, false, false, 'home', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755296939/lpxtmllomohhzkvlju9y.jpg'),
('Oscar', 5, 'Sarah', 'Mixed', 3, 'Playful and loves physical activities', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755276532/kw1oodogmnngz6oooteo.jpg'),

-- User 6 (Alex): 1 pet
('Zoe', 6, 'Alex', 'Shih Tzu', 6, 'Calm and prefers quiet environments', true, false, false, 'home', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755297091/lxmznctauka2vyvw9qn4.jpg'),

-- User 7 (Jessica): 2 pets
('Tucker', 7, 'Jessica', 'Rottweiler', 4, 'Gentle giant who loves other dogs', false, false, false, 'home', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755297453/fyxb8lkh214l7nypoyqa.jpg'),
('Penny', 7, 'Jessica', 'Terrier Mix', 2, 'Energetic and loves to play', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755297751/xfwlkol2juwrlqgcfq1p.jpg'),

-- User 8 (Mike): 3 pets (testing multiple pets)
('Ace', 8, 'Mike', 'Pit Bull', 5, 'Friendly and loves physical play', false, true, false, 'dog park', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755297616/sre7oypsb2boadbzknct.jpg'),
('Rosie', 8, 'Mike', 'Cavalier King Charles', 3, 'Gentle and calm', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755298006/vrqxbr7fgdvskwdx0dsd.jpg'),
('Bear', 8, 'Mike', 'Mastiff', 6, 'Large but gentle, prefers calm play', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755298253/mudlnwlibeou8vjey2ri.jpg'),

-- User 9 (Priya): 1 pet
('Koda', 9, 'Priya', 'Akita', 4, 'Independent and prefers home setting', true, false, false, 'home', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755294923/hubzzxcopyvsq7xsh7hh.jpg'),

-- User 10 (Carlos): 2 pets
('Storm', 10, 'Carlos', 'Belgian Malinois', 3, 'High energy and loves physical activity', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755298904/Belgian-Malinois-dog_di9thk.jpg'),
('Honey', 10, 'Carlos', 'Golden Retriever', 5, 'Calm and gentle', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755299065/shutterstock_2481111053-min-r0pv3sd9nfa4r7bmndiqxdznuv28vectg995colsw8_yhzshv.jpg'),

-- User 11 (Amanda): 1 pet
('Atlas', 11, 'Amanda', 'Great Dane', 4, 'Gentle giant, loves calm interactions', false, false, false, 'home', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755098015/dk3n5i7pltrbtveq7c8c.jpg'),

-- User 12 (James): 2 pets
('Pepper', 12, 'James', 'Border Terrier', 3, 'Energetic and loves to play', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755299244/202106border-terrier-running_j7nhh0.jpg'),
('Olive', 12, 'James', 'Basset Hound', 6, 'Calm and easygoing', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755299341/Chuck_Basset_syv6m1.jpg'),

-- User 13 (Lisa): 4 pets (testing multiple pets)
('Scout', 13, 'Lisa', 'Irish Setter', 2, 'Active and loves physical play', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755299426/images_frjfr7.jpg'),
('Ginger', 13, 'Lisa', 'Irish Setter', 4, 'Energetic and playful', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755299498/irish_setter_playful_l_xbq1q9.jpg'),
('Poppy', 13, 'Lisa', 'Papillon', 5, 'Small and gentle', true, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755299596/RileyPapillon_mmaegr.jpg'),
('Zeus', 13, 'Lisa', 'Doberman', 3, 'Protective but gentle with friends', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755299686/Doberman-with-Small-Dog-Large_vuzs4z.jpg'),

-- User 14 (Daniel): 1 pet
('Finn', 14, 'Daniel', 'Vizsla', 3, 'Energetic and loves outdoor activities', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755299739/Magyar-Vizsla-male-is-running-towards-the-camera_Bianca-Pinkernell_Shutterstock.jpg_rzy7ti.webp'),

-- User 15 (Rachel): 2 pets
('Nova', 15, 'Rachel', 'Siberian Husky', 4, 'High energy, loves physical play', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755197448/honcrf7zzem8izxbzdtl.jpg'),
('Willow', 15, 'Rachel', 'Collie', 5, 'Gentle and calm', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755299958/202104Border-Collie-1420601907-scaled-1_c1vrdd.jpg'),

-- User 16 (Kevin): 1 pet
('Diesel', 16, 'Kevin', 'Cane Corso', 6, 'Large and gentle', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755300033/202104cane-corso-breed-1342463696-scaled-1_whwewl.jpg'),

-- User 17 (Megan): 3 pets (testing multiple pets)
('Nala', 17, 'Megan', 'Rhodesian Ridgeback', 3, 'Active and loves to run', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755300121/happy-dog-rhodesian-ridgeback-running-at-the-beach-see_he6bdo.jpg'),
('Oreo', 17, 'Megan', 'Boston Terrier', 4, 'Playful and energetic', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755300201/202107Boston-Terrier_FeaturedImage_apbzin.jpg'),
('Mocha', 17, 'Megan', 'Corgi', 2, 'Calm and gentle', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755276774/zsy73ix9fborlbtqhf5p.jpg'),

-- User 18 (Ryan): 1 pet
('Ranger', 18, 'Ryan', 'German Shorthaired Pointer', 5, 'Don not underestimate Ranger; he loves exploring with new puppy friends', false, false, false, 'dog park', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755295850/wfeo2prelwx6gq8tmcks.jpg'),

-- User 19 (Natalie): 2 pets
('Luna', 19, 'Natalie', 'Bernese Mountain Dog', 4, 'Gentle giant, calm nature', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755300263/shutterstock_1073056451-2-768x512_rsqwgw.jpg'),
('Copper', 19, 'Natalie', 'Bloodhound', 6, 'Calm and easygoing', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755300311/GettyImages-683744247-220579a3f0fb4a76b3e2545c31de43c3_rzp7my.webp'),

-- User 20 (Brandon): 1 pet
('Phoenix', 20, 'Brandon', 'Pharaoh Hound', 3, 'Energetic and loves to play', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755300391/Pharaoh_Hound1_hu2wrl.png'),

-- User 21 (Sophie): 2 pets
('River', 21, 'Sophie', 'Australian Cattle Dog', 2, 'High energy, loves physical play', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755304702/1966-re_ce78jc.jpg'),
('Sage', 21, 'Sophie', 'Newfoundland', 5, 'Gentle and calm water dog', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755300508/Australian-Cattle-Dog-running_Iryna-Dobrovynska_Shutterstock_y02xtb.jpg'),

-- User 22 (Tyler): 4 pets (testing multiple pets)
('Blaze', 22, 'Tyler', 'Spaniel Mix', 3, 'Fast and loves to run', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755300824/Field-Spaniel-running-in-a-field_ou6ph5.jpg'),
('Ivy', 22, 'Tyler', 'Spaniel Mix', 4, 'Gentle and calm', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755300965/clumber-spaniel-sleeping-by-fireplace-1024x768_llyxbg.webp'),
('Thor', 22, 'Tyler', 'Spaniel Mix', 6, 'Strong and loves physical activity', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755301242/_131117220_picture2.jpg_ligdbg.webp'),
('Pearl', 22, 'Tyler', 'Spaniel Mix', 2, 'Small and gentle', true, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755300746/Ruffles.ICARE-16x9-1-1_iqywjo.jpg'),

-- User 23 (Olivia): 1 pet
('Bluey', 23, 'Olivia', 'Blue Heeler', 4, 'Energetic herding dog', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755301334/Bluey_tcceoy.png'),

-- User 24 (Kenzie): 2 pets
('Cain', 24, 'Kenzie', 'Bestest Buddy', 3, 'The best buddy in all the land', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755302143/IMG_1436_nj9jiq.jpg'),
('Clay', 24, 'Kenzie', 'Mixed', 5, 'Gentle giant, needs lots of love', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755302344/IMG_3688_s2cah6.jpg'),

-- User 25 (Savanna): 1 pet
('Ninja', 25, 'Savanna', 'Dog', 6, 'Definitely a dog', false, false, false, 'home', 'http://res.cloudinary.com/dsz8efr9s/image/upload/v1755107679/eooknjwrt5zfxlrsvy54.jpg'),

-- User 26 (Roger): 3 pets (testing multiple pets)
('Pongo', 26, 'Roger', 'Dalmatian', 4, 'Adventurous and Loyal', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755303734/284_jy0igp.jpg'),
('Perdita', 26, 'Roger', 'Dalmatian', 3, 'Energetic and playful', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755303773/hq720_nch6ud.jpg'),
('Lucky', 26, 'Roger', 'Dalmatian', 1, 'The very cutest', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755303819/7cde65f2658409c1a330d4b3fec08063_bfzxni.jpg'),

-- User 27 (Emily Elizabeth): 1 pet
('Clifford', 27, 'Emily Elizabeth', 'Big Red Dog', 2, 'Energetic and loves physical play', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755303149/MV5BYmYzMDEwZDUtMjdjMi00OTUwLWJiMGYtNzk2ODMwN2UyMDgzXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw._V1_QL75_UX500_CR0_0_500_281__zv7hah.jpg'),

-- User 28 (Ethan): 2 pets
('Scooby', 28, 'Ethan', 'Great Dane', 4, 'Adventurous and Loyal', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755302968/PRODUCT_IMAGES_SCOOBY_DOO_BIRTHDAY_DECORATION_GIFT_PARTY_gnjewg.png'),
('Lassie', 28, 'Ethan', 'Rough Collie', 3, 'Yere my Lassie come home ', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755304072/2294dab69a609ab3563cf175481bb1e3f9046968_2_690x459_ufvfrc.jpg'),

-- User 29 (Zoe): 1 pet
('Eddy', 29, 'Zoe', 'Hot Dog Dog', 5, 'You have never met a dog who is more like a hot dog', false, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755302727/Image_from_iOS_jub6er.jpg'),

-- User 30 (Mason): 2 pets
('Tumblepaws McZoomie', 30, 'Mason', 'Shiba Inu', 3, 'Fetch champion of the world', false, true, false, 'dog park', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755304508/77675_01_sspicg.jpg'),
('Professor', 30, 'Mason', 'Shiba Inu', 4, 'Gentle and calm', true, false, false, 'home', 'https://res.cloudinary.com/dsz8efr9s/image/upload/v1755304359/tumblr_mhatfpXhpO1s4yg05o1_1280_kmqvoj.jpg');

-- Playdate data with complex compatibility logic
-- Rules: Different owners, same metro region (or any), matching is_physical and non-reactive pairs, matching play_setting
-- Each pet gets at least 2 playdates, dates between 8/23/25 and 10/23/25, times 7am-9pm
-- Pet IDs auto-generated 101-158 in insertion order

INSERT INTO playdate(host_pet_id, guest_pet_id, location, playdate_date, playdate_time, status) VALUES
-- Downtown region matches (users 1, 8, 15, 22, 29)
-- Coco (101) & Ace (116) - both physical, dog park
(101, 116, 'dog park', '2025-08-24', '10:00:00', 'accepted'),
-- Bella (102) & Ace (116) - both physical, dog park
(102, 116, 'dog park', '2025-08-26', '14:00:00', 'pending'),
-- Rosie (117) & Willow (131) - both non-physical, home
(117, 131, 'home', '2025-08-28', '16:00:00', 'accepted'),
-- Bear (118) & Willow (131) - both non-physical, home
(118, 131, 'home', '2025-08-30', '11:00:00', 'pending'),
-- Blaze (142) & Coco (101) - both physical, dog park
(142, 101, 'dog park', '2025-09-01', '15:00:00', 'accepted'),
-- Ivy (143) & Rosie (117) - both non-physical, home
(143, 117, 'home', '2025-09-03', '13:00:00', 'pending'),
-- Thor (144) & Bella (102) - both physical, dog park
(144, 102, 'dog park', '2025-09-05', '17:00:00', 'accepted'),
-- Pearl (145) & Bear (118) - both non-physical, home
(145, 118, 'home', '2025-09-07', '12:00:00', 'pending'),
-- Raven (156) & Willow (131) - both non-physical, home
(156, 131, 'home', '2025-09-09', '14:00:00', 'accepted'),

-- University region matches (users 2, 9, 16, 23, 30)
-- Max (103) & Diesel (132) - both non-physical, home
(103, 132, 'home', '2025-08-25', '09:00:00', 'accepted'),
-- Luna (104) & Bandit (146) - both physical, dog park
(104, 146, 'dog park', '2025-08-27', '16:00:00', 'pending'),
-- Charlie (105) & Koda (119) - both non-physical, home
(105, 119, 'home', '2025-08-29', '10:00:00', 'accepted'),
-- Daisy (106) & Koda (119) - both non-physical, home
(106, 119, 'home', '2025-08-31', '15:00:00', 'pending'),
-- Duke (157) & Bandit (146) - both physical, dog park
(157, 146, 'dog park', '2025-09-02', '11:00:00', 'accepted'),
-- Luna Bichon (158) & Max (103) - both non-physical, home
(158, 103, 'home', '2025-09-06', '13:00:00', 'accepted'),

-- Northside region matches (users 3, 10, 17, 24)
-- Rocky (107) & Storm (120) - both physical, dog park
(107, 120, 'dog park', '2025-08-26', '08:00:00', 'accepted'),
-- Honey (121) & Maple (148) - both non-physical, home
(121, 148, 'home', '2025-08-28', '14:00:00', 'pending'),
-- Nala (133) & Echo (147) - both physical, dog park
(133, 147, 'dog park', '2025-08-30', '17:00:00', 'accepted'),
-- Oreo (134) & Rocky (107) - both physical, dog park
(134, 107, 'dog park', '2025-09-01', '12:00:00', 'pending'),
-- Mocha (135) & Honey (121) - both non-physical, home
(135, 121, 'home', '2025-09-03', '16:00:00', 'accepted'),
-- Echo (147) & Storm (120) - both physical, dog park
(147, 120, 'dog park', '2025-09-05', '10:00:00', 'pending'),
-- Maple (148) & Mocha (135) - both non-physical, home
(148, 135, 'home', '2025-09-07', '15:00:00', 'accepted'),

-- Southside region matches (users 4, 11, 18, 25)
-- Sadie (108) & Atlas (122) - both non-physical, home
(108, 122, 'home', '2025-08-25', '11:00:00', 'accepted'),
-- Buddy (109) & Ranger (136) - both physical, dog park
(109, 136, 'dog park', '2025-08-27', '14:00:00', 'pending'),
-- Milo (110) & Ranger (136) - both physical, dog park
(110, 136, 'dog park', '2025-08-29', '16:00:00', 'accepted'),
-- Atlas (122) & Juno (149) - both non-physical, home
(122, 149, 'home', '2025-08-31', '13:00:00', 'pending'),
-- Ranger (136) & Buddy (109) - both physical, dog park
(136, 109, 'dog park', '2025-09-02', '18:00:00', 'accepted'),
-- Juno (149) & Sadie (108) - both non-physical, home
(149, 108, 'home', '2025-09-04', '12:00:00', 'pending'),

-- Westside region matches (users 5, 12, 19, 26)
-- Ruby (111) & Olive (124) - both non-physical, home
(111, 124, 'home', '2025-08-24', '15:00:00', 'accepted'),
-- Oscar (112) & Pepper (123) - both physical, dog park
(112, 123, 'dog park', '2025-08-26', '17:00:00', 'pending'),
-- Luna Bernese (137) & Arrow (150) - both non-physical, home
(137, 150, 'home', '2025-08-28', '10:00:00', 'accepted'),
-- Copper (138) & Jasper (152) - both non-physical, home
(138, 152, 'home', '2025-08-30', '14:00:00', 'pending'),
-- Hazel (151) & Oscar (112) - both physical, dog park
(151, 112, 'dog park', '2025-09-01', '16:00:00', 'accepted'),
-- Pepper (123) & Hazel (151) - both physical, dog park
(123, 151, 'dog park', '2025-09-03', '11:00:00', 'pending'),
-- Olive (124) & Luna Bernese (137) - both non-physical, home
(124, 137, 'home', '2025-09-05', '13:00:00', 'accepted'),
-- Arrow (150) & Copper (138) - both non-physical, home
(150, 138, 'home', '2025-09-07', '17:00:00', 'pending'),
-- Jasper (152) & Ruby (111) - both non-physical, home
(152, 111, 'home', '2025-09-09', '15:00:00', 'accepted'),

-- Eastside region matches (users 6, 13, 20, 27)
-- Zoe (113) & Poppy (127) - both non-physical, home
(113, 127, 'home', '2025-08-25', '12:00:00', 'accepted'),
-- Scout (125) & Phoenix (139) - both physical, dog park
(125, 139, 'dog park', '2025-08-27', '15:00:00', 'pending'),
-- Ginger (126) & Storm (153) - both physical, dog park
(126, 153, 'dog park', '2025-08-29', '18:00:00', 'accepted'),
-- Zeus (128) & Zoe (113) - both non-physical, home
(128, 113, 'home', '2025-08-31', '16:00:00', 'pending'),
-- Phoenix (139) & Scout (125) - both physical, dog park
(139, 125, 'dog park', '2025-09-02', '14:00:00', 'accepted'),
-- Storm (153) & Ginger (126) - both physical, dog park
(153, 126, 'dog park', '2025-09-04', '17:00:00', 'pending'),
-- Poppy (127) & Zeus (128) - both non-physical, home
(127, 128, 'home', '2025-09-06', '11:00:00', 'accepted'),

-- Any/All region matches with all other regions (users 7, 14, 21, 28)
-- Jessica (any) with downtown users
-- Tucker (114) & Rosie (117) - both non-physical, home
(114, 117, 'home', '2025-08-26', '13:00:00', 'accepted'),
-- Penny (115) & Blaze (142) - both physical, dog park
(115, 142, 'dog park', '2025-08-28', '16:00:00', 'pending'),

-- Daniel (any) with university users
-- Finn (129) & Luna (104) - both physical, dog park
(129, 104, 'dog park', '2025-08-30', '12:00:00', 'accepted'),
-- Finn (129) & Bandit (146) - both physical, dog park
(129, 146, 'dog park', '2025-09-01', '18:00:00', 'pending'),

-- Sophie (any) with northside users
-- River (140) & Nala (133) - both physical, dog park
(140, 133, 'dog park', '2025-09-02', '15:00:00', 'accepted'),
-- Sage (141) & Mocha (135) - both non-physical, home
(141, 135, 'home', '2025-09-04', '14:00:00', 'pending'),

-- Ethan (any) with southside users
-- Cedar (154) & Sadie (108) - both non-physical, home
(154, 108, 'home', '2025-09-06', '10:00:00', 'accepted'),
-- Blitz (155) & Milo (110) - both physical, dog park
(155, 110, 'dog park', '2025-09-08', '16:00:00', 'pending'),

-- Cross-region any matches
-- Tucker (114) & Sage (141) - both non-physical, home
(114, 141, 'home', '2025-09-10', '13:00:00', 'accepted'),
-- Penny (115) & Finn (129) - both physical, dog park
(115, 129, 'dog park', '2025-09-12', '15:00:00', 'pending'),
-- River (140) & Blitz (155) - both physical, dog park
(140, 155, 'dog park', '2025-09-14', '17:00:00', 'accepted'),
-- Cedar (154) & Tucker (114) - both non-physical, home
(154, 114, 'home', '2025-09-16', '12:00:00', 'pending'),

-- Additional playdates to ensure each pet has at least 2
-- Coco (101) & Thor (144) - both physical, dog park
(101, 144, 'dog park', '2025-09-18', '14:00:00', 'accepted'),
-- Bella (102) & Penny (115) - both physical, dog park
(102, 115, 'dog park', '2025-09-20', '16:00:00', 'pending'),
-- Daisy (106) & Luna Bichon (158) - both non-physical, home
(106, 158, 'home', '2025-09-24', '13:00:00', 'pending'),
-- Rocky (107) & Oreo (134) - both physical, dog park
(107, 134, 'dog park', '2025-09-22', '11:00:00', 'accepted'),
-- Sadie (108) & Juno (149) - both non-physical, home
(108, 149, 'home', '2025-09-24', '13:00:00', 'pending'),
-- Buddy (109) & Echo (147) - both physical, dog park
(109, 147, 'dog park', '2025-09-26', '15:00:00', 'accepted'),
-- Milo (110) & Storm (153) - both physical, dog park
(110, 153, 'dog park', '2025-09-28', '17:00:00', 'pending'),
-- Ruby (111) & Zoe (113) - both non-physical, home
(111, 113, 'home', '2025-09-30', '12:00:00', 'accepted'),
-- Oscar (112) & Phoenix (139) - both physical, dog park
(112, 139, 'dog park', '2025-10-02', '14:00:00', 'pending'),
-- Koda (119) & Raven (156) - both non-physical, home
(119, 156, 'home', '2025-10-04', '16:00:00', 'accepted'),
-- Storm (120) & Blitz (155) - both physical, dog park
(120, 155, 'dog park', '2025-10-06', '18:00:00', 'pending'),
-- Honey (121) & Cedar (154) - both non-physical, home
(121, 154, 'home', '2025-10-08', '10:00:00', 'accepted'),
-- Nova (130) & River (140) - both physical, dog park
(130, 140, 'dog park', '2025-10-10', '15:00:00', 'pending'),
-- Willow (131) & Sage (141) - both non-physical, home
(131, 141, 'home', '2025-10-12', '13:00:00', 'accepted'),
-- Nala (133) & Ginger (126) - both physical, dog park
(133, 126, 'dog park', '2025-10-14', '17:00:00', 'pending'),
-- Ivy (143) & Pearl (145) - both non-physical, home
(143, 145, 'home', '2025-10-16', '11:00:00', 'accepted'),
-- Hazel (151) & Scout (125) - both physical, dog park
(151, 125, 'dog park', '2025-10-18', '16:00:00', 'pending'),
-- Duke (157) & Finn (129) - both physical, dog park
(157, 129, 'dog park', '2025-10-20', '14:00:00', 'accepted'),
-- Luna Bichon (158) & Poppy (127) - both non-physical, home
(158, 127, 'home', '2025-10-22', '12:00:00', 'pending');

COMMIT TRANSACTION;