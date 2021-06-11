
INSERT INTO department (id, name)
VALUES (1, "Data Scientists");

INSERT INTO department (id, name)
VALUES (2, "Human Resources");

INSERT INTO department (id, name)
VALUES (3, "Safety");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Data Specialist", 70000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Project Manager", 90000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Specialist", 60000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Vice President", 100000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Cybersecurity", 90000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "IT", 70000, 3);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Ted", "Tedderson", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Sara", "Sarason", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Billy", "Billyson", 3, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Mike", "Mikeson", 2, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Grace", "Gracerson", 1, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Gus", "Gusson", 6, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Dustin", "Dustyson", 5, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Greg", "Gregson", 3, 6);