CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE message (
    id SERIAL PRIMARY KEY,
    subject VARCHAR(50),
    text TEXT,
    isRead BOOLEAN DEFAULT false,
    date TEXT,
    sender_id INTEGER, 
    recipient_id INTEGER, 
    FOREIGN KEY (sender_id) REFERENCES user (id),
    FOREIGN KEY (recipient_id) REFERENCES user (id)
);