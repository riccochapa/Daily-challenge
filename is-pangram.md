# -*- coding:utf-8 -*-

'''
# Pangram
Determine if a sentence is a pangram.
Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma,
"every letter") is a sentence using every letter of the alphabet at least once.
The best known English pangram is "The quick brown fox jumps over the lazy dog."
The alphabet used is ASCII, and case insensitive, from 'a' to 'z'
inclusively.
'''

def is_pangram(string):
  return False

assert is_pangram('') is False
assert is_pangram('the quick brown fox jumps over the lazy dog') is True
assert is_pangram('the quick brown fish jumps over the lazy dog') is False
assert is_pangram('a quick movement of the enemy will jeopardize five gunboats') is False
assert is_pangram('"Five quacking Zephyrs jolt my wax bed."') is True
assert is_pangram('Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.') is True
