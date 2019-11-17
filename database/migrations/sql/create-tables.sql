CREATE TABLE Frequencies (
ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
Name VARCHAR(255) NOT NULL,
Multiplier INT NOT NULL);

CREATE TABLE Expense_Parent (
ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
Name VARCHAR(255) NOT NULL UNIQUE);

CREATE TABLE Incomes (
ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
Name VARCHAR(255) NOT NULL,
Amount FLOAT NOT NULL,
Planned VARCHAR(255),
PlannedDate VARCHAR(255));

CREATE TABLE State (
ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE);

CREATE TABLE Expenses (
ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
Name VARCHAR(255) NOT NULL,
Frequency_Id INT,
Income_Id INT,
Parent_Id INT NOT NULL,
Amount FLOAT NOT NULL,
Pretax BOOL NOT NULL,
Planned VARCHAR(255),
PlannedDate VARCHAR(255),
FOREIGN KEY (Frequency_Id) REFERENCES Frequencies(ID),
FOREIGN KEY (Income_Id) REFERENCES Incomes(ID),
FOREIGN KEY (Parent_Id) REFERENCES Expense_Parent(ID)
);

CREATE TABLE Week (
ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
Week_Begin DATE NOT NULL UNIQUE,
State_Id INT NOT NULL,
DisposableBudget FLOAT,
DisposableSpent FLOAT,
FOREIGN KEY (State_Id) REFERENCES State(ID));

CREATE TABLE State_Expense (
Expense_Id INT NOT NULL,
State_Id INT NOT NULL,
FOREIGN KEY (State_Id) REFERENCES State(ID),
FOREIGN KEY (Expense_Id) REFERENCES Expenses(ID)
);

CREATE TABLE Week_Expense (
Expense_Id INT NOT NULL,
Week_Id INT NOT NULL,
Amount FLOAT NOT NULL,
FOREIGN KEY (Expense_Id) REFERENCES Expenses(ID),
FOREIGN KEY (Week_Id) REFERENCES Week(ID));

CREATE TABLE Week_Income (
Income_Id INT NOT NULL,
Week_Id INT NOT NULL,
Income_Amount FLOAT,
Income_Balance FLOAT,
FOREIGN KEY (Week_Id) REFERENCES Week(ID),
FOREIGN KEY (Income_Id) REFERENCES Incomes(ID));