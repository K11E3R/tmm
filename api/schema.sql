CREATE TABLE IF NOT EXISTS 
	"blog_category" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"name" varchar(100) NOT NULL
	);

CREATE TABLE sqlite_sequence(name,seq);

CREATE TABLE IF NOT EXISTS 
	"blog_post" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"category" varchar(30) NOT NULL, 
		"nom" varchar(255) NOT NULL, 	
		"societe" varchar(255) NOT NULL, 
		"adresse1" varchar(255) NOT NULL, 
		"adresse2" varchar(255) NOT NULL, 
		"codep" varchar(255) NOT NULL, 
		"pays" varchar(255) NOT NULL, 
		"ville" varchar(255) NOT NULL, 
		"codet" varchar(255) NOT NULL, 
		"tele" varchar(255) NOT NULL, 
		"fax" varchar(255) NOT NULL, 
		"email" varchar(255) NOT NULL, 
		"noma" varchar(255) NOT NULL, 
		"societea" varchar(255) NOT NULL, 
		"adresse1a" varchar(255) NOT NULL, 
		"adresse2a" varchar(255) NOT NULL, 
		"codepa" varchar(255) NOT NULL, 
		"paysa" varchar(255) NOT NULL, 
		"villea" varchar(255) NOT NULL, 
		"codeta" varchar(255) NOT NULL, 
		"telea" varchar(255) NOT NULL, 
		"faxa" varchar(255) NOT NULL, 
		"emaila" varchar(255) NOT NULL, 
		"nbcolis" varchar(30) NOT NULL, 
		"poids" varchar(30) NOT NULL, 
		"largeur" varchar(30) NOT NULL, 
		"longueur" varchar(30) NOT NULL, 
		"hauteur" varchar(30) NOT NULL, 
		"valeur" varchar(30) NOT NULL, 
		"descriptif" varchar(255) NOT NULL, 
		"instruction" varchar(255) NOT NULL, 
		"published" datetime NOT NULL, 
		"author_id" integer NOT NULL REFERENCES "users_newuser" ("id") DEFERRABLE INITIALLY DEFERRED, 
		"status" varchar(10) NOT NULL, 
		"datereception" varchar(30) NOT NULL, 
		"heurerecption" varchar(30) NOT NULL, 
		"recupar" varchar(30) NOT NULL
	);

CREATE INDEX "blog_post_author_id_dd7a8485" ON "blog_post" ("author_id");

CREATE TABLE IF NOT EXISTS 
	"flask_migrations" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"app" varchar(255) NOT NULL, 
		"name" varchar(255) NOT NULL, 
		"applied" datetime NOT NULL
	);

CREATE TABLE IF NOT EXISTS 
	"flask_content_type" 
	(	
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"app_label" varchar(100) NOT NULL, 
		"model" varchar(100) NOT NULL
	);

CREATE UNIQUE INDEX "flask_content_type_app_label_model_76bd3d3b_uniq" ON "flask_content_type" ("app_label", "model");

CREATE TABLE IF NOT EXISTS 
	"auth_group_permissions" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"group_id" integer NOT NULL REFERENCES "auth_group" ("id") DEFERRABLE INITIALLY DEFERRED, 
		"permission_id" integer NOT NULL REFERENCES "auth_permission" ("id") DEFERRABLE INITIALLY DEFERRED
	);

CREATE UNIQUE INDEX "auth_group_permissions_group_id_permission_id_0cd325b0_uniq" ON "auth_group_permissions" ("group_id", "permission_id");
CREATE INDEX "auth_group_permissions_group_id_b120cbf9" ON "auth_group_permissions" ("group_id");
CREATE INDEX "auth_group_permissions_permission_id_84c5c92e" ON "auth_group_permissions" ("permission_id");

CREATE TABLE IF NOT EXISTS 
	"auth_permission" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"content_type_id" integer NOT NULL REFERENCES "flask_content_type" ("id") DEFERRABLE INITIALLY DEFERRED, 
		"codename" varchar(100) NOT NULL, 
		"name" varchar(255) NOT NULL
	);

CREATE UNIQUE INDEX "auth_permission_content_type_id_codename_01ab375a_uniq" ON "auth_permission" ("content_type_id", "codename");
CREATE INDEX "auth_permission_content_type_id_2f476e4b" ON "auth_permission" ("content_type_id");

CREATE TABLE IF NOT EXISTS 
	"auth_group" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"name" varchar(150) NOT NULL UNIQUE
	);
CREATE TABLE IF NOT EXISTS 
	"users_newuser_groups" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"newuser_id" integer NOT NULL REFERENCES "users_newuser" ("id") DEFERRABLE INITIALLY DEFERRED, 
		"group_id" integer NOT NULL REFERENCES "auth_group" ("id") DEFERRABLE INITIALLY DEFERRED
	);

CREATE TABLE IF NOT EXISTS 
	"users_newuser_user_permissions" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"newuser_id" integer NOT NULL REFERENCES "users_newuser" ("id") DEFERRABLE INITIALLY DEFERRED, 
		"permission_id" integer NOT NULL REFERENCES "auth_permission" ("id") DEFERRABLE INITIALLY DEFERRED
	);

CREATE UNIQUE INDEX "users_newuser_groups_newuser_id_group_id_df6b4b64_uniq" ON "users_newuser_groups" ("newuser_id", "group_id");
CREATE INDEX "users_newuser_groups_newuser_id_7f6f4c4c" ON "users_newuser_groups" ("newuser_id");
CREATE INDEX "users_newuser_groups_group_id_525a4e68" ON "users_newuser_groups" ("group_id");
CREATE UNIQUE INDEX "users_newuser_user_permissions_newuser_id_permission_id_5e320e13_uniq" ON "users_newuser_user_permissions" ("newuser_id", "permission_id");
CREATE INDEX "users_newuser_user_permissions_newuser_id_bb22b5b4" ON "users_newuser_user_permissions" ("newuser_id");
CREATE INDEX "users_newuser_user_permissions_permission_id_72696cfa" ON "users_newuser_user_permissions" ("permission_id");

CREATE TABLE IF NOT EXISTS 
	"flask_admin_log" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"action_time" datetime NOT NULL, 
		"object_id" text NULL, 
		"object_repr" varchar(200) NOT NULL, 
		"change_message" text NOT NULL, 
		"content_type_id" integer NULL REFERENCES 
		"flask_content_type" ("id") DEFERRABLE INITIALLY DEFERRED, 
		"user_id" integer NOT NULL REFERENCES "users_newuser" ("id") DEFERRABLE INITIALLY DEFERRED, 
		"action_flag" smallint unsigned NOT NULL CHECK ("action_flag" >= 0)
	);

CREATE INDEX "flask_admin_log_content_type_id_c4bce8eb" ON "flask_admin_log" ("content_type_id");
CREATE INDEX "flask_admin_log_user_id_c564eba6" ON "flask_admin_log" ("user_id");

CREATE TABLE IF NOT EXISTS 
	"flask_session" 
	(
		"session_key" varchar(40) NOT NULL PRIMARY KEY, 
		"session_data" text NOT NULL, 
		"expire_date" datetime NOT NULL
	);

CREATE INDEX "flask_session_expire_date_a5c62663" ON "flask_session" ("expire_date");

CREATE TABLE IF NOT EXISTS 
	"token_blacklist_blacklistedtoken" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"blacklisted_at" datetime NOT NULL, 
		"token_id" integer NOT NULL UNIQUE REFERENCES "token_blacklist_outstandingtoken" ("id") DEFERRABLE INITIALLY DEFERRED
	);

CREATE TABLE IF NOT EXISTS 
	"token_blacklist_outstandingtoken" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"token" text NOT NULL, 
		"created_at" datetime NULL, 
		"expires_at" datetime NOT NULL, 
		"jti" varchar(255) NOT NULL UNIQUE, 
		"user_id" integer NULL REFERENCES "users_newuser" ("id") DEFERRABLE INITIALLY DEFERRED
	);

CREATE INDEX "token_blacklist_outstandingtoken_user_id_83bc629a" ON "token_blacklist_outstandingtoken" ("user_id");

CREATE TABLE IF NOT EXISTS 
	"users_newuser" 
	(
		"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
		"password" varchar(128) NOT NULL, 
		"last_login" datetime NULL, 
		"user_type" varchar(25) NOT NULL,
		"is_superuser" bool NOT NULL, 
		"email" varchar(254) NOT NULL UNIQUE, 
		"user_name" varchar(150) NOT NULL UNIQUE, 
		"first_name" varchar(150) NOT NULL, 
		"start_date" datetime NOT NULL, 
		"about" text NOT NULL, 
		"is_staff" bool NOT NULL, 
		"is_active" bool NOT NULL
	);