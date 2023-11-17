import csv
from fuzzywuzzy import fuzz
import pandas as pd

# Function to find the best matching column
def find_best_match(target_column, source_columns):
    best_score = -1
    best_match = None

    for source_column in source_columns:
        similarity_score = fuzz.ratio(target_column.lower(), source_column.lower())
        print(f'Similarity of "{target_column}" and "{source_column}" = {similarity_score}')
        if similarity_score > best_score:
            best_score = similarity_score
            best_match = source_column

    return best_match, best_score

# Load source and target column names from CSV files
def load_column_names_from_csv(file_path):
    with open(file_path, mode='r', newline='') as csv_file:
        reader = csv.reader(csv_file)
        return next(reader)

# Example source and target CSV files
source_csv_file = 'C://Users//91991//Desktop//IIA-Project-Copy//merged.csv'  # Replace with your source CSV file path
target_csv_file = 'C://Users//91991//Desktop//IIA-Project-Copy//newegg_products.csv'  # Replace with your target CSV file path

source_columns = load_column_names_from_csv(source_csv_file)
target_columns = load_column_names_from_csv(target_csv_file)

# Initialize a list to store matched pairs
matched_column_pairs = []

# Match columns from the target to source
for target_column in target_columns:
    best_match, score = find_best_match(target_column, source_columns)

    if best_match is not None and score >= 50:  # Adjust the similarity threshold as needed
        matched_column_pairs.append((target_column, best_match))

# Print the matched column pairs
for target_column, source_column in matched_column_pairs:
    print(f'Matched: Target="{target_column}", Source="{source_column}"')

#club the data of the matched columns into a single csv file:
# Load the data from the CSV files
source_df = pd.read_csv(source_csv_file)
target_df = pd.read_csv(target_csv_file)

# Create a new DataFrame to store the merged data
merged_df = pd.DataFrame()
#data_file='C://Users//91991//Desktop//IIA-Project-Copy//merged.csv'

#store the target csv file data in the data_filr corresponding to their matching columns:
#merged_df = pd.read_csv(data_file)

# Merge the data from the matched columns
for target_column, source_column in matched_column_pairs:
    merged_df[target_column] = source_df[source_column].append(target_df[target_column], ignore_index=True)

# Save the merged data to a CSV file
merged_df.to_csv('C://Users//91991//Desktop//IIA-Project-Copy//merged.csv', index=False)