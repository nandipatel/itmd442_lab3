/* 
 *  Create & init site content
 */

-- ITEMS --

CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY,
  f_name TEXT DEFAULT "",
  l_name TEXT DEFAULT "",
  email TEXT DEFAULT "",
  note TEXT DEFAULT "",
  date_time DATETIME
);

INSERT INTO items
  (f_name, l_name, email, note, date_time) 
VALUES 
  ("Rosalinda", "Chen", "rchen122@gmail.com", "N/A", 2022-11-11 13:23:44),
  ("Kyle", "Chen", "conorL23@gmail.com", "N/A", 2022-11-11 13:30:42)
  ("Conor", "Lee", "conorL23@gmail.com", "Using my personal email", 2022-11-09 11:45:21),
  ("Ty", "Brown", "tb1990@gmail.com", "", 2022-10-09 16:45:21),
  ("Mike", "Brown", "conorL23@gmail.com", "", 2022-10-09 16:30:21);