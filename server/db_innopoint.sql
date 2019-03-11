PGDMP     6        	            w            db_innopoint    10.7    10.7     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �
           1262    16393    db_innopoint    DATABASE     �   CREATE DATABASE db_innopoint WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Polish_Poland.1250' LC_CTYPE = 'Polish_Poland.1250';
    DROP DATABASE db_innopoint;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �
           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �
           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            O           1247    16416 	   user_enum    TYPE     W   CREATE TYPE public.user_enum AS ENUM (
    'student',
    'mentor',
    'moderator'
);
    DROP TYPE public.user_enum;
       public       postgres    false    3            L           1247    16401 
   user_roles    TYPE     X   CREATE TYPE public.user_roles AS ENUM (
    'student',
    'mentor',
    'moderator'
);
    DROP TYPE public.user_roles;
       public       postgres    false    3            �            1259    16443    topics    TABLE       CREATE TABLE public.topics (
    id numeric NOT NULL,
    name character varying NOT NULL,
    company character varying NOT NULL,
    contact character varying NOT NULL,
    students character varying NOT NULL,
    description character varying NOT NULL
);
    DROP TABLE public.topics;
       public         postgres    false    3            �            1259    16394    users    TABLE     �   CREATE TABLE public.users (
    id numeric NOT NULL,
    name character varying,
    surname character varying,
    user_role public.user_enum
);
    DROP TABLE public.users;
       public         postgres    false    591    3            �
          0    16443    topics 
   TABLE DATA               S   COPY public.topics (id, name, company, contact, students, description) FROM stdin;
    public       postgres    false    197   �       �
          0    16394    users 
   TABLE DATA               =   COPY public.users (id, name, surname, user_role) FROM stdin;
    public       postgres    false    196   �       y
           2606    16435    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         postgres    false    196            �
      x������ � �      �
   ]   x�3��J����/O�)���,.)MI�+�2�H,O���Jds��򋸌9�R��R� ��� ��)�E� i΀���"΀����D�Q1z\\\ �"1     