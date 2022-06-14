/*
 * Title: Database
 * Description : file system related work . CRUD operation.
 * Author : Siam Khushnobish
 * Date : 11/06/2022
 */

// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.database');

// write data to file
lib.create = (dir, fileName, data, callback) => {
  // open file for writing
  fs.open(
    `${lib.basedir}/${dir}/${fileName}.json`,
    'wx',
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        //   convert data to string
        const stringData = JSON.stringify(data);

        //   write data to file and then close it
        fs.writeFile(fileDescriptor, stringData, (err2) => {
          if (!err2) {
            fs.close(fileDescriptor, (err3) => {
              if (!err3) {
                callback(false);
              } else {
                callback('Error closing the new file!');
              }
            });
          } else {
            callback('Error writing the new file!');
          }
        });
      } else {
        callback(err);
      }
    }
  );
};

// read data
lib.read = (dir, fileName, callback) => {
  fs.readFile(
    `${lib.basedir}/${dir}/${fileName}.json`,
    'utf-8',
    (err, data) => {
      callback(err, data);
    }
  );
};

// update existing file
lib.update = (dir, fileName, data, callback) => {
  // file open for writing
  fs.open(
    `${lib.basedir}/${dir}/${fileName}.json`,
    'r+',
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        // convert the data to string
        const stringData = JSON.stringify(data);

        // truncate the file
        fs.ftruncate(fileDescriptor, (err) => {
          if (!err) {
            // write the file and close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
              if (!err2) {
                // close the file
                fs.close(fileDescriptor, (err3) => {
                  if (!err3) {
                    callback(false);
                  } else {
                    callback('Error closing file');
                  }
                });
              } else {
                callback('Error writing to file');
              }
            });
          } else {
            console.log('Error truncating file');
          }
        });
      } else {
        console.log('Error up ');
      }
    }
  );
};

// delete existing file
lib.delete = (dir, fileName, callback) => {
  // unlink file
  fs.unlink(`${lib.basedir}/${dir}/${fileName}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback(err);
    }
  });
};

// exports module
module.exports = lib;
