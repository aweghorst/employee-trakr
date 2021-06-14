
INSERT INTO department (id, name)
VALUES (1, "Marketing");

INSERT INTO department (id, name)
VALUES (2, "Human Resources");

INSERT INTO department (id, name)
VALUES (3, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Marketing Manager", 70000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Head of Direct Marketing", 90000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Specialist", 60000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Director", 100000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Executive Director of Sales", 90000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Regional Sales Manager", 70000, 3);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Ted", "Tedderson", 3, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Sara", "Sarason", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Billy", "Billyson", 3, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Mike", "Mikeson", 2, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Grace", "Gracerson", 1, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Gus", "Gusson", 6, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Dustin", "Dustyson", 5, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Greg", "Gregson", 3, 4);