--
-- PostgreSQL database dump
--

-- Dumped from database version 10.7
-- Dumped by pg_dump version 10.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: user_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.user_enum AS ENUM (
    'student',
    'mentor',
    'moderator'
);


ALTER TYPE public.user_enum OWNER TO postgres;

--
-- Name: user_roles; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.user_roles AS ENUM (
    'student',
    'mentor',
    'moderator'
);


ALTER TYPE public.user_roles OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    project_id numeric NOT NULL,
    topic character varying NOT NULL,
    description character varying NOT NULL,
    team_id character varying NOT NULL,
    goals character varying NOT NULL,
    scopes character varying,
    requirements character varying,
    mentor character varying,
    company character varying,
    num_of_members numeric,
    technology character varying,
    tags character varying(100)
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- Name: teams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teams (
);


ALTER TABLE public.teams OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id numeric NOT NULL,
    name character varying,
    surname character varying,
    user_role public.user_enum,
    team_role character varying,
    team_leader bit(1),
    pulled_request numeric,
    commits numeric,
    team_id numeric
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (project_id, topic, description, team_id, goals, scopes, requirements, mentor, company, num_of_members, technology, tags) FROM stdin;
1	Project1	Lorem ipsum	1	null	null	IT Student	mentor1	Nokia	5	JavaScript	JavaScript
2	Project2	Lorem ipsummmm	2	create something	place for scopes	AiR Students	mentor1	Nokia	3	Eagle, C++	Robotics
\.


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teams  FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, name, surname, user_role, team_role, team_leader, pulled_request, commits, team_id) FROM stdin;
1	Jan	Kowalski	student	\N	\N	\N	\N	\N
2	Pawel	Nowak	mentor	\N	\N	\N	\N	\N
3	Andrzej	Nowakowski	moderator	\N	\N	\N	\N	\N
4	Piotr	Pogoda	student	\N	\N	\N	\N	\N
0.88963	Krzysztof	Woda	student	\N	\N	\N	\N	\N
\.


--
-- Name: projects topics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT topics_pkey PRIMARY KEY (project_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

