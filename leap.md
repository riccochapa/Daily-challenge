#Leap

Write a program that will take a year and report if it is a leap year.

The tricky thing here is that a leap year in the Gregorian calendar occurs:

```plain
on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
```

For example, 1997 is not a leap year, but 1996 is.  1900 is not a leap
year, but 2000 is.

If your language provides a method in the standard library that does
this look-up, pretend it doesn't exist and implement it yourself.

##Use for testing with Jasmine 2.3.4:


  it('is not very common', function() {
    expect(isLeap(2015)).toBe(false);
  });

  it('is introduced every 4 years to adjust about a day', function() {
    expect(isLeap(2016)).toBe(true);
  });

  it('is skipped every 100 years to remove an extra day', function() {
    expect(isLeap(1900)).toBe(false);
  });

  it('is reintroduced every 400 years to adjust another day', function() {
    expect(isLeap(2000)).toBe(true);
  });

  it('is not a leap year', function () {
    expect(isLeap(1978)).toBe(false);
  });

  it('is a common leap year', function () {
    expect(isLeap(1992)).toBe(true);
  });

  it('is skipped every 100 years', function () {
    expect(isLeap(2100)).toBe(false);
  });

  it('is reintroduced every 400 years', function () {
    expect(isLeap(2400)).toBe(true);
  });
