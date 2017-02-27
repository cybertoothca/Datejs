if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
  'Overview': {
    setup: function() {  this.baseline = new Date('7/8/2004') },
    'July 8th, 2004 : Typical': {
      run: function() { this.date = Date.parsePlus('July 8th, 2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    'jul-08-04 : Abbreviated': {
      run: function() { this.date = Date.parsePlus('jul-8-04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07/08/04 : Numeric': {
      run: function() { this.date = Date.parsePlus('07/08/04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '2004.07.08 : Separator': {
      run: function() { this.date = Date.parsePlus('2004.07.08') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7-8, \'04 : Random Curve ball': {
      run: function() { this.date = Date.parsePlus('7-8, \'04') },
      assert: function() { return this.baseline.equals( this.date ) }      
    },
    '07/8/2004 : Leading Zeros': {
      run: function() { this.date = Date.parsePlus('07/08/2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '15-Jan-2004 : Custom': {
      run: function() { this.date = Date.parsePlus('15-Jan-2004') },
      assert: function() { return new Date(2004,0,15).equals( this.date ) } 
    },
    '2004-07-08 : Sortable': {
      run: function() { this.date = Date.parsePlus('2004-07-08') },
      assert: function() { return this.baseline.equals( this.date ) }
    }
  },

'Phrase Variations': {
    setup: function() {
        this.baseline = new Date(2004,6,1);
        this.baseline2 = new Date(2004,6,15);
    },
     '1-Jul-2004': {
       run: function() { this.date =  Date.parsePlus('1-Jul-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     '01-Jul-2004': {
       run: function() { this.date =  Date.parsePlus('01-Jul-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     }, 
     '01-Jul-04': {
       run: function() { this.date =  Date.parsePlus('01-Jul-04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },  
     '1-July-2004': {
       run: function() { this.date =  Date.parsePlus('1-July-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     '01-July-2004': {
       run: function() { this.date =  Date.parsePlus('01-July-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     }, 
     '01-July-04': {
       run: function() { this.date =  Date.parsePlus('01-July-04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     '15-July-2004': {
       run: function() { this.date =  Date.parsePlus('15-July-2004') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     '15-July-2004': {
       run: function() { this.date =  Date.parsePlus('15-July-2004') },
       assert: function() { return this.baseline2.equals( this.date ) }
     }, 
     '15-July-04': {
       run: function() { this.date =  Date.parsePlus('15-July-04') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     'July 1, 2004': {
       run: function() { this.date =  Date.parsePlus('July 1, 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'July 1,2004': {
       run: function() { this.date =  Date.parsePlus('July 1,2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 1, 2004': {
       run: function() { this.date =  Date.parsePlus('Jul 1, 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 1,2004': {
       run: function() { this.date =  Date.parsePlus('Jul 1,2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'July 01, 2004': {
       run: function() { this.date =  Date.parsePlus('July 01, 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'July 01,2004': {
       run: function() { this.date =  Date.parsePlus('July 01,2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 01, 2004': {
       run: function() { this.date =  Date.parsePlus('Jul 01, 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 01,2004': {
       run: function() { this.date =  Date.parsePlus('Jul 01,2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },    
     'July 01, 04': {
       run: function() { this.date =  Date.parsePlus('July 01, 04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'July 01,04': {
       run: function() { this.date =  Date.parsePlus('July 01,04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 01, 04': {
       run: function() { this.date =  Date.parsePlus('Jul 01, 04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 01,04': {
       run: function() { this.date =  Date.parsePlus('Jul 01,04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'July 1st 2004': {
       run: function() { this.date =  Date.parsePlus('July 1st 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },  
     'July 2nd 2004': {
       run: function() { this.date =  Date.parsePlus('July 2nd 2004') },
       assert: function() { return new Date(2004,6,2).equals( this.date ) }
     },  
     'July 3rd 2004': {
       run: function() { this.date =  Date.parsePlus('July 3rd 2004') },
       assert: function() { return new Date(2004,6,3).equals( this.date ) }
     },  
     'July 4th 2004': {
       run: function() { this.date =  Date.parsePlus('July 4th 2004') },
       assert: function() { return new Date(2004,6,4).equals( this.date ) }
     },  
     'July 15th 2004': {
       run: function() { this.date =  Date.parsePlus('July 15th 2004') },
       assert: function() { return new Date(2004,6,15).equals( this.date ) }
     },  
     'July 21st 2004': {
       run: function() { this.date =  Date.parsePlus('July 21st 2004') },
       assert: function() { return new Date(2004,6,21).equals( this.date ) }
     },  
     'July 22nd 2004': {
       run: function() { this.date =  Date.parsePlus('July 22nd 2004') },
       assert: function() { return new Date(2004,6,22).equals( this.date ) }
     },
     'July 23rd 2004': {
       run: function() { this.date =  Date.parsePlus('July 23rd 2004') },
       assert: function() { return new Date(2004,6,23).equals( this.date ) }
     },  
     'July 31st 2004': {
       run: function() { this.date =  Date.parsePlus('July 31st 2004') },
       assert: function() { return new Date(2004,6,31).equals( this.date ) }
     }, 
     'Jul 1st 04': {
       run: function() { this.date =  Date.parsePlus('Jul 1st 04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },  
     'Jul 2nd 04': {
       run: function() { this.date =  Date.parsePlus('Jul 2nd 04') },
       assert: function() { return new Date(2004,6,2).equals( this.date ) }
     },  
     'Jul 3rd 04': {
       run: function() { this.date =  Date.parsePlus('Jul 3rd 04') },
       assert: function() { return new Date(2004,6,3).equals( this.date ) }
     },  
     'Jul 4th 04': {
       run: function() { this.date =  Date.parsePlus('Jul 4th 04') },
       assert: function() { return new Date(2004,6,4).equals( this.date ) }
     },  
     'Jul 15th 04': {
       run: function() { this.date =  Date.parsePlus('Jul 15th 04') },
       assert: function() { return new Date(2004,6,15).equals( this.date ) }
     },  
     'Jul 21st 04': {
       run: function() { this.date =  Date.parsePlus('Jul 21st 04') },
       assert: function() { return new Date(2004,6,21).equals( this.date ) }
     },  
     'Jul 22nd 04': {
       run: function() { this.date =  Date.parsePlus('Jul 22nd 04') },
       assert: function() { return new Date(2004,6,22).equals( this.date ) }
     },
     'Jul 23rd 04': {
       run: function() { this.date =  Date.parsePlus('Jul 23rd 04') },
       assert: function() { return new Date(2004,6,23).equals( this.date ) }
     },  
     'Jul 31st 04': {
       run: function() { this.date =  Date.parsePlus('Jul 31st 04') },
       assert: function() { return new Date(2004,6,31).equals( this.date ) }
     },
     'Thu July 1, 2004': {
       run: function() { this.date =  Date.parsePlus('Thu July 1, 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     }, 
     'Fri July 2, 2004': {
       run: function() { this.date =  Date.parsePlus('Fri July 2, 2004') },
       assert: function() { return new Date(2004,6,2).equals( this.date ) }
     },        
     'Sat July 3, 2004': {
       run: function() { this.date =  Date.parsePlus('Sat July 3, 2004') },
       assert: function() { return new Date(2004,6,3).equals( this.date ) }
     },
     'jul-1-2004': {
       run: function() { this.date =  Date.parsePlus('jul-1-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'jul-1-04': {
       run: function() { this.date =  Date.parsePlus('jul-1-04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'jul-01-2004': {
       run: function() { this.date =  Date.parsePlus('jul-01-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'jul-01-04': {
       run: function() { this.date =  Date.parsePlus('jul-01-04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'jul-15-2004': {
       run: function() { this.date =  Date.parsePlus('jul-15-2004') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     'jul-15-04': {
       run: function() { this.date =  Date.parsePlus('jul-15-04') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     'jul-15-2004': {
       run: function() { this.date =  Date.parsePlus('jul-15-2004') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     'jul-15-04': {
       run: function() { this.date =  Date.parsePlus('jul-15-04') },
       assert: function() { return this.baseline2.equals( this.date ) }
     }
  },
'Separator Variations': {
    setup: function() {
        this.baseline = new Date(2004,6,1);
        this.baseline2 = new Date(2004,6,15);
    },
    '7/1/2004': {
      run: function() { this.date =  Date.parsePlus('7/1/2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07/01/2004': {
      run: function() { this.date =  Date.parsePlus('07/01/2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07/01/04': {
      run: function() { this.date =  Date.parsePlus('07/01/04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7/1/04': {
      run: function() { this.date =  Date.parsePlus('7/1/04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },   
    '7/15/2004': {
      run: function() { this.date =  Date.parsePlus('7/15/2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07/15/2004': {
      run: function() { this.date =  Date.parsePlus('07/15/2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07/15/04': {
      run: function() { this.date =  Date.parsePlus('07/15/04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7/15/04': {
      run: function() { this.date =  Date.parsePlus('7/15/04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7-1-2004': {
      run: function() { this.date =  Date.parsePlus('7-1-2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07-01-2004': {
      run: function() { this.date =  Date.parsePlus('07-01-2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07-01-04': {
      run: function() { this.date =  Date.parsePlus('07-01-04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7-1-04': {
      run: function() { this.date =  Date.parsePlus('7-1-04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7-15-2004': {
      run: function() { this.date =  Date.parsePlus('7-15-2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07-15-2004': {
      run: function() { this.date =  Date.parsePlus('07-15-2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07-15-04': {
      run: function() { this.date =  Date.parsePlus('07-15-04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7-15-04': {
      run: function() { this.date =  Date.parsePlus('7-15-04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7.1.2004': {
      run: function() { this.date =  Date.parsePlus('7.1.2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07.01.2004': {
      run: function() { this.date =  Date.parsePlus('07.01.2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07.01.04': {
      run: function() { this.date =  Date.parsePlus('07.01.04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7.1.04': {
      run: function() { this.date =  Date.parsePlus('7.1.04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7.15.2004': {
      run: function() { this.date =  Date.parsePlus('7.15.2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07.15.2004': {
      run: function() { this.date =  Date.parsePlus('07.15.2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07.15.04': {
      run: function() { this.date =  Date.parsePlus('07.15.04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7.15.04': {
      run: function() { this.date =  Date.parsePlus('7.15.04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    }
  },
'Sortable Variations': {
     setup: function() {
         this.baseline = new Date(2004,6,1);
         this.baseline2 = new Date(2004,6,15);
    },
    '2004-07-01': {
       run: function() { this.date =  Date.parsePlus('2004-07-01') },
       assert: function() { return this.baseline.equals( this.date ) }
    },
    '2004-07-15': {
       run: function() { this.date =  Date.parsePlus('2004-07-15') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     '2004/7/1': {
       run: function() { this.date =  Date.parsePlus('2004/7/1') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     '2004/07/01': {
       run: function() { this.date =  Date.parsePlus('2004/07/01') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     '2004/7/15': {
       run: function() { this.date =  Date.parsePlus('2004/7/15') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     '2004/07/15': {
       run: function() { this.date =  Date.parsePlus('2004/07/15') },
       assert: function() { return this.baseline2.equals( this.date ) }
     }
   },
   'Numeric Dates': {
    setup: function() {
        this.baseline = new Date(2004,6,1);
        this.baseline2 = new Date(2004,6,15);
    },
        
    '07012004': {
      run: function() { this.date =  Date.parsePlus('07012004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
      

    '07152004': {
      run: function() { this.date =  Date.parsePlus('07152004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7152004': {
      run: function() { this.date =  Date.parsePlus('7152004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
  },

    'Fail -- pattern "d" does not handle single numbers in ambiguous contexts' : {
      setup: function() {
        this.baseline = new Date(2004,6,1);
        this.baseline2 = new Date(2004,6,15);
    },
      '712004': {
      run: function() { 
        this.date =  Date.parseExact('712004', 'Mdyyyy') 
      },
      assert: function() { 
        return this.baseline.equals( this.date ) 
      }
    },
    '7104': {
      run: function() { 
        this.date =  Date.parsePlus('7104', { format : "Mdyy" } )
      },
      assert: function() { 
        return this.baseline.equals( this.date ) 
      }
    },  

    '71504': {
      run: function() { 
        this.date =  Date.parsePlus('71504', { format : "Mdyy" } )
      },
      assert: function() { 
        return this.baseline2.equals( this.date ) 
      }
    }, 
    }    
});

