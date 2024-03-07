athentication 


1. hashing --> conveerting a simple string is converted into gibberish and vice versa is not possible///
2. encryption --> files/data --> encryption ---> store --> password --> decryption --> file/data
3. json web token --> json/ip ---> big string token/op ::whoever have the json token cna see the data and contents
    decoding can be donw by anyone, but verification can only be done by the backend servers.(jwt.io) basically a digital signature.
4.  local storage --> the json web token gets stored in browser storage and remains there forever. Upon logginout    
    the storage data gets erased.