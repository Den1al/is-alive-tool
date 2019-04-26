# Is Alive Tool

## Author
[@Daniel_Abeles](http://twitter.com/Daniel_Abeles)

## About
This is basically trying to fetch a few web pages to test if we have a valid internet connection. It takes a rather naive approach of validation. It was originally created for educational purposes.

## Usage
To run the tool just run from the command line:

`$ npm start`

If you have a valid internet connection you would see:
```
 🔶  Testing whether we have internet connection  🔶

 ▪ ✅  tested https://twitter.com and it's up❕
 ▪ ✅  tested https://facebook.com and it's up❕
 ▪ ✅  tested https://reddit.com and it's up❕

 😎  All urls seem to be alive, we are good to go!
```

If there is a problem with at least one of the URLs:

```
 🔶  Testing whether we have internet connection  🔶

 ▪ ✅  tested https://facebook.com and it's up❕
 ▪ ✅  tested https://twitter.com and it's up❕
 ▪ ❌  tested https://reddit2.com and it's down 💤

 ☹ ️ It seems there is kind of an issue ...
```