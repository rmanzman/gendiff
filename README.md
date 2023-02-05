![Last commit](https://img.shields.io/github/last-commit/rmanzman/gendiff)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/rmanzman/gendiff/hexlet-check.yml)
[![Tests](https://github.com/rmanzman/gendiff/actions/workflows/gendiff.yml/badge.svg)](https://github.com/rmanzman/gendiff/actions/workflows/gendiff.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/4e1c8ccd4e1a657e81a9/maintainability)](https://codeclimate.com/github/rmanzman/gendiff/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4e1c8ccd4e1a657e81a9/test_coverage)](https://codeclimate.com/github/rmanzman/gendiff/test_coverage)

## Gendiff

### Description:
Gendiff is a CLI utility compares two configuration files and shows a difference.

### System requirements and Installation guide:
Make sure you have Node.js (14.0.x.x or higher) and npm installed.

1. Clone the project
```bash
git clone https://github.com/rmanzman/gendiff.git
```
2. Install the project
```bash
cd gendiff
npm ci
```
3. Install dependencies
```bash
npm link
```

### Usage
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```

### Supported files and formats
Input formats: **.json, .yaml, .yml**.  
Output formats: **stylish, plain, JSON**.

### Usage examples and demonstration
For stylish output:
```bash
gendiff path/to/file1.json path/to/file2.json
```
or
```bash
gendiff -f stylish path/to/file1.json path/to/file2.json
```

Stylish output demonstration:
[![asciicast](https://asciinema.org/a/f3hz8UmzipMi7VSbBE58u6nM2.svg)](https://asciinema.org/a/f3hz8UmzipMi7VSbBE58u6nM2)
***
For plain output:
```bash
gendiff -f plain path/to/file1.json path/to/file2.json
```

Plain output demonstration:
[![asciicast](https://asciinema.org/a/FdZzW1c3wp4767KgVc10v8uma.svg)](https://asciinema.org/a/FdZzW1c3wp4767KgVc10v8uma)
***
For JSON output:
```bash
gendiff -f json path/to/file1.json path/to/file2.json
```

JSON output demonstration:
[![asciicast](https://asciinema.org/a/KkaQllbvmpATilKNn9Jey50Cz.svg)](https://asciinema.org/a/KkaQllbvmpATilKNn9Jey50Cz)