PGDMP     "                    x        	   happiness    12.3    12.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            @           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            A           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            B           1262    24576 	   happiness    DATABASE     g   CREATE DATABASE happiness WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE happiness;
                postgres    false            �            1259    24619 	   happiness    TABLE     n  CREATE TABLE public.happiness (
    country text NOT NULL,
    rank integer,
    score double precision,
    economy double precision,
    family double precision,
    health double precision,
    freedom double precision,
    generosity double precision,
    trust double precision,
    year integer NOT NULL,
    lat double precision,
    long double precision
);
    DROP TABLE public.happiness;
       public         heap    postgres    false            �           2606    24626    happiness happiness_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.happiness
    ADD CONSTRAINT happiness_pkey PRIMARY KEY (country, year);
 B   ALTER TABLE ONLY public.happiness DROP CONSTRAINT happiness_pkey;
       public            postgres    false    202    202           