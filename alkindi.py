import re
import math

ciphertext = """PCQ VMJYPD LBYK LYSO KBXBJXWXV BXV ZCJPO EYPD KBXBJYUXJ LBJOO KCPK. CP LBO LBCMKXPV XPV
IYJKL PYDBL, QBOP KBO BXV OPVOV LBO LXRO CI SX’XJMI, KBO JCKO XPV EYKKOV LBO DJCMPV ZOICJO
BYS, KXUYPD: “DJOXL EYPD, ICJ X LBCMKXPV XPV CPO PYDBLK Y BXNO ZOOP JOACMPLYPD LC UCM LBO
IXZROK CI FXKL XDOK XPV LBO RODOPVK CI XPAYOPL EYPDK. SXU Y SXEO KC ZCRV XK LC AJXNO X IXNCMJ
CI UCMJ SXGOKLU"""

# clean the ciphertext, uppercase it and make it ready for frequency analysis
# by convention, uppercase characters are used to denote encrypted text and lowercase characters are used to denote decrypted characters
def ciphertext_clean(ciphertext):
    ciphertext_cleaned = ciphertext.strip().upper()
    return ciphertext_cleaned

# generate list of characters that are arranged in an ascending order
# removes duplicates and arranges according to ascending order
# returns a dict
def frequency_analysis(ciphertext_cleaned):
    charset = set()
    for x in ciphertext_cleaned: charset.add(x)      
    charlist = list(charset)
    charlist.sort()
    frequency_table = {}
    for x in charlist: frequency_table.update({x:0})
    for x in ciphertext_cleaned: frequency_table[x] += 1
    return frequency_table

def frequency_of_letters_EN():
    letter_frequency_table = {
    'a': 8.2,
    'b': 1.5,
    'c': 2.8,
    'd': 4.3,
    'e': 12.7,
    'f': 2.2,
    'g': 2.0,
    'h': 6.1,
    'i': 7.0,
    'j': 0.2,
    'k': 0.8,
    'l': 4.0,
    'm': 2.4,
    'n': 6.7,
    'o': 7.5,
    'p': 1.9,
    'q': 0.1,
    'r': 6.0,
    's': 6.3,
    't': 9.1,
    'u': 2.8,
    'v': 1.0,
    'w': 2.4,
    'x': 0.2,
    'y': 2.0,
    'z': 0.1
    }
    letter_frequency_sorted = {}
    for x in sorted(letter_frequency_table.items(), key=lambda kv: (kv[1], kv[0]), reverse=True): 
        letter_frequency_sorted.update({x[0]:x[1]})
    return letter_frequency_sorted

