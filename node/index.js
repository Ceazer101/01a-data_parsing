import * as fs from 'fs';
import csvParser from 'csv-parser';
import xml2js from 'xml2js';
import * as yaml from 'js-yaml';

// Function to read and parse text files
function parseText(filename) {
    const data = fs.readFileSync(filename, 'utf-8');
    return data.trim().split('\n').map(line => line.split(', '));
}

// Function to read and parse YAML files
function parseYAML(filename) {
    const data = fs.readFileSync(filename, 'utf-8');
    return yaml.load(data);
}

// Function to read and parse JSON files
function parseJSON(filename) {
    const data = fs.readFileSync(filename, 'utf-8');
    return JSON.parse(data);
}

// Function to read and parse XML files and print to console
function parseXML(filename) {
    const parser = new xml2js.Parser();
    fs.readFile(filename, (err, data) => {
        if (err) {
            console.error("Error reading XML file:", err);
        } else {
            parser.parseString(data, (err, result) => {
                if (err) {
                    console.error("Error parsing XML:", err);
                } else {
                    console.log(result);
                }
            });
        }
    });
}

// Function to read and parse CSV files and print to console
function parseCSV(filename) {
    fs.createReadStream(filename)
        .pipe(csvParser())
        .on('data', (data) => {
            console.log(data);
        })
        .on('end', () => {
            console.log("CSV parsing completed.");
        })
        .on('error', (error) => {
            console.error("Error parsing CSV:", error);
        });
}

// Test parsing for Set 1
console.log("Set 1:");
console.log("Text:");
console.log(parseText("../dataFiles/set1/users.txt"));
console.log("\nYAML:");
console.log(parseYAML("../dataFiles/set1/users.yaml"));
console.log("\nJSON:");
console.log(parseJSON("../dataFiles/set1/users.json"));
console.log("\nXML:");
console.log(parseXML("../dataFiles/set1/users.xml"));
console.log("\nCSV:");
console.log(parseCSV("../dataFiles/set1/users.csv"));
