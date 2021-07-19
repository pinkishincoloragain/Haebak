
import pandas as pd
import pprint as pp
import openpyxl
from collections import Counter

df1 = pd.read_excel("./data/result.xlsx")

# pp.pprint(df1)

# print(df1["text"])

text_splitted = df1.text.str.split()
split_counter = Counter()

print(text_splitted.count)

comment_splitted = df1.comment_text.str.split()

print(comment_splitted.count)


# print(df1["comment_text"])