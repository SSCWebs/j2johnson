create table guest_details (
    couple_id serial primary key,
    couple_name text not null
);

create table guest_list (
	guest_id serial primary key,
	guest_name text not null,
	plus_name text null,
	email text not null,
	phone_number text unique not null,
	rsvp boolean not null,
	couple_id integer REFERENCES guest_details (couple_id)
);

insert into guest_details (couple_name)
  values ('Krystle'), ('Joe');
  
insert into guest_list (guest_name, plus_name, email, phone_number, rsvp, couple_id)
	values ('test', '', 'test@aol.com', '757-376-4478', '0', '1'),
			('test1', '', 'test1@aol.com', '757-378-4478', '0', '2'),
			('test2', 'Joe Doe', 'test2@aol.com', '757-378-4352', '0', '1'),
			('test3', 'Jane Doe', 'test3@aol.com', '757-378-4552', '0', '2');
  
-- single insert 
insert into guest_list (guest_name, plus_name, email, phone_number, rsvp, couple_id)
	values ('testRsvp', '', 'testrsvp@aol.com', '757-324-4478', null, '1');

select * from guest_details;
select * from guest_list;

-- SCRIPTS
-- admin script to find guest list details
select guest_list.*, guest_details.couple_name 
	from guest_list 
	inner join guest_details 
	on guest_list.couple_id = guest_details.couple_id;

-- guest script to find by email
select guest_name, email, plus_name, rsvp from guest_list where email='test@aol.com';
  
-- accept or decline invitation 
UPDATE guest_list
	SET rsvp = 'false'
	WHERE email = 'test@aol.com';

-- REMOVE SCRIPTS
delete from guest_details where (couple_id)='4';
delete from guest_list where (guest_id)='4';
drop table guest_list;