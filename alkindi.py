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

print(ciphertext_clean(ciphertext))
print(frequency_analysis(ciphertext_clean(ciphertext)))
