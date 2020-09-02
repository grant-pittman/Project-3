import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt
from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
rds_connection_string = "postgres:postgres@localhost:5432/happiness"
engine = create_engine(f'postgresql://{rds_connection_string}')
session = Session(engine)
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
happiness = Base.classes.happiness

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/happiest_countries/year<br/>"
        f"/api/v1.0/rank<br/>"
    )


@app.route("/api/v1.0/happiest_countries/<year>")
def most_happy(year):
    results = session.query(happiness.rank, happiness.country, happiness.score).filter(happiness.year == year).all()

    # Create a dictionary from the row data and append to a list of all_countries
    all_countries = []
    for rank, country, score in results:
        country_dict = {}
        country_dict["rank"] = rank
        country_dict["country"] = country
        country_dict["score"] = score
        all_countries.append(country_dict)

    return jsonify(all_countries)

@app.route("/api/v1.0/<rank>")
def one_country(rank):

   results = session.query(happiness.rank, happiness.country, happiness.score).filter(happiness.rank == rank).all()
   country_list = list(results)
   return jsonify(country_list)
   
if __name__ == '__main__':
    app.run(debug=True)


# CODE TO USE LATER
# trip_data = session.query(func.min(Measurement.tobs), func.avg(Measurement.tobs), func.max(Measurement.tobs)).\
#        filter(Measurement.date >= country).filter(Measurement.date <= end).filter(Measurement.station == 'USC00519281').all()