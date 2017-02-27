if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
  'Partial Date: No Year': {
     setup: function() {
       this.today = new Date().clearTime(); 
       this.baseline = []; 
       this.baseline[0] = this.today.clone().set( { month: 6, day: 1 } )
       this.baseline[1] = this.today.clone().set( { month: 6, day: 1, hour: 22 } );
       this.baseline[2] = this.today.clone().set( { month: 6, day: 1, hour: 22, minute: 30 } );
       
       this.baseline[3] = this.today.clone().set( { month: 6, day: 15 } )
       this.baseline[4] = this.today.clone().set( { month: 6, day: 15, hour: 6 } );
       this.baseline[5] = this.today.clone().set( { month: 6, day: 15, hour: 6, minute: 45 } );
     },
     
    '7/1 10 PM': {
      run: function() { this.date =  Date.parsePlus('7/1 10 PM') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '07/01 10 PM': {
      run: function() { this.date =  Date.parsePlus('07/01 10 PM') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '07/01 10 PM': {
      run: function() { this.date =  Date.parsePlus('07/01 10 PM') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '7/1 10 PM': {
      run: function() { this.date =  Date.parsePlus('7/1 10 PM') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },   
    '7/15 6 AM': {
      run: function() { this.date =  Date.parsePlus('7/15 6 AM') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '07/15 6 AM': {
      run: function() { this.date =  Date.parsePlus('07/15 6 AM') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '07/15 6 AM': {
      run: function() { this.date =  Date.parsePlus('07/15 6 AM') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '7/15 6 AM': {
      run: function() { this.date =  Date.parsePlus('7/15 6 AM') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '7/1 10pm': {
      run: function() { this.date =  Date.parsePlus('7/1 10pm') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '07/01 10pm': {
      run: function() { this.date =  Date.parsePlus('07/01 10pm') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '07/01 10pm': {
      run: function() { this.date =  Date.parsePlus('07/01 10pm') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '7/1 10pm': {
      run: function() { this.date =  Date.parsePlus('7/1 10pm') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },   
    '7/15 6am': {
      run: function() { this.date =  Date.parsePlus('7/15 6am') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '07/15 6am': {
      run: function() { this.date =  Date.parsePlus('07/15 6am') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '07/15 6am': {
      run: function() { this.date =  Date.parsePlus('07/15 6am') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '7/15 6am': {
      run: function() { this.date =  Date.parsePlus('7/15 6am') },
      assert: function() { return this.baseline[4].equals( this.date ) }
    },
    '7/1 10:30 PM': {
      run: function() { this.date =  Date.parsePlus('7/1 10:30 PM') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '07/01 10:30 PM': {
      run: function() { this.date =  Date.parsePlus('07/01 10:30 PM') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '07/01 10:30 PM': {
      run: function() { this.date =  Date.parsePlus('07/01 10:30 PM') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '7/1 10:30 PM': {
      run: function() { this.date =  Date.parsePlus('7/1 10:30 PM') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },   
    '7/15 6:45 AM': {
      run: function() { this.date =  Date.parsePlus('7/15 6:45 AM') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '07/15 6:45 AM': {
      run: function() { this.date =  Date.parsePlus('07/15 6:45 AM') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '07/15 6:45 AM': {
      run: function() { this.date =  Date.parsePlus('07/15 6:45 AM') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '7/15 6:45 AM': {
      run: function() { this.date =  Date.parsePlus('7/15 6:45 AM') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '7/1 10:30p': {
      run: function() { this.date =  Date.parsePlus('7/1 10:30p') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '07/01 10:30p': {
      run: function() { this.date =  Date.parsePlus('07/01 10:30p') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '07/01 10:30p': {
      run: function() { this.date =  Date.parsePlus('07/01 10:30p') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '7/1 10:30p': {
      run: function() { this.date =  Date.parsePlus('7/1 10:30p') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },   
    '7/15 6:45a': {
      run: function() { this.date =  Date.parsePlus('7/15 6:45a') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '07/15 6:45a': {
      run: function() { this.date =  Date.parsePlus('07/15 6:45a') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '07/15 6:45a': {
      run: function() { this.date =  Date.parsePlus('07/15 6:45a') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '7/15 6:45a': {
      run: function() { this.date =  Date.parsePlus('7/15 6:45a') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '1-Jul': {
      run: function() { this.date =  Date.parsePlus('1-Jul') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },
    '1-July': {
      run: function() { this.date =  Date.parsePlus('1-July') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },    
    '01-Jul': {
      run: function() { this.date =  Date.parsePlus('01-Jul') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    }, 
    '01-July': {
      run: function() { this.date =  Date.parsePlus('01-July') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },     
    '15-Jul': {
      run: function() { this.date =  Date.parsePlus('15-Jul') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },
    '15-July': {
      run: function() { this.date =  Date.parsePlus('15-July') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },  


    'July 1': {
      run: function() { this.date =  Date.parsePlus('July 1') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },   
    'Jul 1': {
      run: function() { this.date =  Date.parsePlus('Jul 1') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    }, 
    'July 01': {
      run: function() { this.date =  Date.parsePlus('July 01') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },   
    'Jul 01': {
      run: function() { this.date =  Date.parsePlus('Jul 01') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },      
    'July 15': {
      run: function() { this.date =  Date.parsePlus('July 15') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    }, 
    'Jul 15': {
      run: function() { this.date =  Date.parsePlus('Jul 15') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },       
    
    
    'July 1st': {
      run: function() { this.date =  Date.parsePlus('July 1st') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },   
    'July 2nd': {
      run: function() { this.date =  Date.parsePlus('July 2nd') },
      assert: function() { return this.baseline[0].addDays(1).equals( this.date ) }
    },   
    'July 3rd': {
      run: function() { this.date =  Date.parsePlus('July 3rd') },
      assert: function() { return this.baseline[0].addDays(2).equals( this.date ) }
    },   
    'July 4th': {
      run: function() { this.date =  Date.parsePlus('July 4th') },
      assert: function() { return this.baseline[0].addDays(3).equals( this.date ) }
    }, 
    
    
    '7/1': {
      run: function() { this.date =  Date.parsePlus('7/1') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },
    '07/01': {
      run: function() { this.date =  Date.parsePlus('07/01') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    }, 
    '7/15': {
      run: function() { this.date =  Date.parsePlus('7/15') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },
    '07/15': {
      run: function() { this.date =  Date.parsePlus('07/15') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    }              

 },
  


   'No Day: Default To First Of Month': {
    setup: function() { 
      this.baseline = new Date(2008,6,1);
    },
    'Jan 2008': {
      run: function() { this.date =  Date.parsePlus('Jan 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    },
    'January 2008': {
      run: function() { this.date =  Date.parsePlus('January 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    },
    'Feb 2008': {
      run: function() { this.date =  Date.parsePlus('Feb 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    },
     'February 2008': {
      run: function() { this.date =  Date.parsePlus('February 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    },
     'Mar 2008': {
      run: function() { this.date =  Date.parsePlus('Mar 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    },
     'March 2008': {
      run: function() { this.date =  Date.parsePlus('March 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    },
     'Apr 2008': {
      run: function() { this.date =  Date.parsePlus('Apr 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    },
     'April 2008': {
      run: function() { this.date =  Date.parsePlus('April 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    },
     'May 2008': {
      run: function() { this.date =  Date.parsePlus('May 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    },
     'Jun 2008': {
      run: function() { this.date =  Date.parsePlus('Jun 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    },
     'June 2008': {
      run: function() { this.date =  Date.parsePlus('June 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    },
     'Jul 2008': {
      run: function() { this.date =  Date.parsePlus('Jul 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    },
     'July 2008': {
      run: function() { this.date =  Date.parsePlus('July 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    },
     'Aug 2008': {
      run: function() { this.date =  Date.parsePlus('Aug 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
     'August 2008': {
      run: function() { this.date =  Date.parsePlus('August 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
     'Sep 2008': {
      run: function() { this.date =  Date.parsePlus('Sep 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    },
     'Sept 2008': {
      run: function() { this.date =  Date.parsePlus('Sept 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    },
     'September 2008': {
      run: function() { this.date =  Date.parsePlus('September 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    },
     'Oct 2008': {
      run: function() { this.date =  Date.parsePlus('Oct 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    },
     'October 2008': {
      run: function() { this.date =  Date.parsePlus('October 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    },
     'Nov 2008': {
      run: function() { this.date =  Date.parsePlus('November 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    },
     'November 2008': {
      run: function() { this.date =  Date.parsePlus('November 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    },
     'Dec 2008': {
      run: function() { this.date =  Date.parsePlus('Dec 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
     'December 2008': {
      run: function() { this.date =  Date.parsePlus('December 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
    '1/2008': {
      run: function() { this.date =  Date.parsePlus('1/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2/2008': {
      run: function() { this.date =  Date.parsePlus('2/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '3/2008': {
      run: function() { this.date =  Date.parsePlus('3/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '4/2008': {
      run: function() { this.date =  Date.parsePlus('4/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '5/2008': {
      run: function() { this.date =  Date.parsePlus('5/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '6/2008': {
      run: function() { this.date =  Date.parsePlus('6/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '7/2008': {
      run: function() { this.date =  Date.parsePlus('7/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '8/2008': {
      run: function() { this.date =  Date.parsePlus('8/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '9/2008': {
      run: function() { this.date =  Date.parsePlus('9/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '10/2008': {
      run: function() { this.date =  Date.parsePlus('10/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '11/2008': {
      run: function() { this.date =  Date.parsePlus('11/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '12/2008': {
      run: function() { this.date =  Date.parsePlus('12/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    }, 

 '1 2008': {
      run: function() { this.date =  Date.parsePlus('1 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2 2008': {
      run: function() { this.date =  Date.parsePlus('2 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '3 2008': {
      run: function() { this.date =  Date.parsePlus('3 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '4 2008': {
      run: function() { this.date =  Date.parsePlus('4 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '5 2008': {
      run: function() { this.date =  Date.parsePlus('5 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '6 2008': {
      run: function() { this.date =  Date.parsePlus('6 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '7 2008': {
      run: function() { this.date =  Date.parsePlus('7 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '8 2008': {
      run: function() { this.date =  Date.parsePlus('8 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '9 2008': {
      run: function() { this.date =  Date.parsePlus('9 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '10 2008': {
      run: function() { this.date =  Date.parsePlus('10 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '11 2008': {
      run: function() { this.date =  Date.parsePlus('11 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '12 2008': {
      run: function() { this.date =  Date.parsePlus('12 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
    
  '1-2008': {
      run: function() { this.date =  Date.parsePlus('1-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2-2008': {
      run: function() { this.date =  Date.parsePlus('2-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '3-2008': {
      run: function() { this.date =  Date.parsePlus('3-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '4-2008': {
      run: function() { this.date =  Date.parsePlus('4-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '5-2008': {
      run: function() { this.date =  Date.parsePlus('5-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '6-2008': {
      run: function() { this.date =  Date.parsePlus('6-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '7-2008': {
      run: function() { this.date =  Date.parsePlus('7-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '8-2008': {
      run: function() { this.date =  Date.parsePlus('8-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '9-2008': {
      run: function() { this.date =  Date.parsePlus('9-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '10-2008': {
      run: function() { this.date =  Date.parsePlus('10-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '11-2008': {
      run: function() { this.date =  Date.parsePlus('11-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '12-2008': {
      run: function() { this.date =  Date.parsePlus('12-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
       
       '2008/1': {
      run: function() { this.date =  Date.parsePlus('2008/1') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2008/2': {
      run: function() { this.date =  Date.parsePlus('2008/2') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '2008/3': {
      run: function() { this.date =  Date.parsePlus('2008/3') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '2008/4': {
      run: function() { this.date =  Date.parsePlus('2008/4') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '2008/5': {
      run: function() { this.date =  Date.parsePlus('2008/5') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '2008/6': {
      run: function() { this.date =  Date.parsePlus('2008/6') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '2008/7': {
      run: function() { this.date =  Date.parsePlus('2008/7') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '2008/8': {
      run: function() { this.date =  Date.parsePlus('2008/8') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '2008/9': {
      run: function() { this.date =  Date.parsePlus('2008/9') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '2008/10': {
      run: function() { this.date =  Date.parsePlus('2008/10') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '2008/11': {
      run: function() { this.date =  Date.parsePlus('2008/11') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '2008/12': {
      run: function() { this.date =  Date.parsePlus('2008/12') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
    
        
    '2008-1': {
      run: function() { this.date =  Date.parsePlus('2008-1') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2008-2': {
      run: function() { this.date =  Date.parsePlus('2008-2') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '2008-3': {
      run: function() { this.date =  Date.parsePlus('2008-3') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '2008-4': {
      run: function() { this.date =  Date.parsePlus('2008-4') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '2008-5': {
      run: function() { this.date =  Date.parsePlus('2008-5') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '2008-6': {
      run: function() { this.date =  Date.parsePlus('2008-6') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '2008-7': {
      run: function() { this.date =  Date.parsePlus('2008-7') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '2008-8': {
      run: function() { this.date =  Date.parsePlus('2008-8') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '2008-9': {
      run: function() { this.date =  Date.parsePlus('2008-9') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '2008-10': {
      run: function() { this.date =  Date.parsePlus('2008-10') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '2008-11': {
      run: function() { this.date =  Date.parsePlus('2008-11') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '2008-12': {
      run: function() { this.date =  Date.parsePlus('2008-12') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
    
       
    '2008 1': {
      run: function() { this.date =  Date.parsePlus('2008 1') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2008 2': {
      run: function() { this.date =  Date.parsePlus('2008 2') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '2008 3': {
      run: function() { this.date =  Date.parsePlus('2008 3') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '2008 4': {
      run: function() { this.date =  Date.parsePlus('2008 4') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '2008 5': {
      run: function() { this.date =  Date.parsePlus('2008 5') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '2008 6': {
      run: function() { this.date =  Date.parsePlus('2008 6') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '2008 7': {
      run: function() { this.date =  Date.parsePlus('2008 7') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '2008 8': {
      run: function() { this.date =  Date.parsePlus('2008 8') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '2008 9': {
      run: function() { this.date =  Date.parsePlus('2008 9') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '2008 10': {
      run: function() { this.date =  Date.parsePlus('2008 10') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '2008 11': {
      run: function() { this.date =  Date.parsePlus('2008 11') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '2008 12': {
      run: function() { this.date =  Date.parsePlus('2008 12') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    }
  },  
  
  
    'No Year or Month': {
    setup: function() { 
      //default to current Year and Month
        this.baseline = new Date(2004,6,1);
        
        this.today = Date.today();
        this.now = new Date();
    },
    '1': {
      run: function() { },
      assert: function() { return Date.today().set({day: 1}).equals(Date.parsePlus('1')) }
    }, 
    '2': {
      run: function() { },
      assert: function() { return Date.today().set({day: 2}).equals(Date.parsePlus('2')) }
    }, 
    '3': {
      run: function() { },
      assert: function() { return Date.today().set({day: 3}).equals(Date.parsePlus('3')) }
    }, 
    '4': {
      run: function() { },
      assert: function() { return Date.today().set({day: 4}).equals(Date.parsePlus('4')) }
    }, 
    '5': {
      run: function() { },
      assert: function() { return Date.today().set({day: 5}).equals(Date.parsePlus('5')) }
    }, 
    '6': {
      run: function() { },
      assert: function() { return Date.today().set({day: 6}).equals(Date.parsePlus('6')) }
    }, 
    '7': {
      run: function() { },
      assert: function() { return Date.today().set({day: 7}).equals(Date.parsePlus('7')) }
    }, 
    '8': {
      run: function() { },
      assert: function() { return Date.today().set({day: 8}).equals(Date.parsePlus('8')) }
    }, 
    '9': {
      run: function() { },
      assert: function() { return Date.today().set({day: 9}).equals(Date.parsePlus('9')) }
    }, 
    '10': {
      run: function() { },
      assert: function() { return Date.today().set({day: 10}).equals(Date.parsePlus('10')) }
    }, 
    '11': {
      run: function() { },
      assert: function() { return Date.today().set({day: 11}).equals(Date.parsePlus('11')) }
    }, 
    '12': {
      run: function() { },
      assert: function() { return Date.today().set({day: 12}).equals(Date.parsePlus('12')) }
    }, 
    '13': {
      run: function() { },
      assert: function() { return Date.today().set({day: 13}).equals(Date.parsePlus('13')) }
    }, 
    '14': {
      run: function() { },
      assert: function() { return Date.today().set({day: 14}).equals(Date.parsePlus('14')) }
    }, 
    '15': {
      run: function() { },
      assert: function() { return Date.today().set({day: 15}).equals(Date.parsePlus('15')) }
    }, 
    '16': {
      run: function() { },
      assert: function() { return Date.today().set({day: 16}).equals(Date.parsePlus('16')) }
    }, 
    '17': {
      run: function() { },
      assert: function() { return Date.today().set({day: 17}).equals(Date.parsePlus('17')) }
    }, 
    '18': {
      run: function() { },
      assert: function() { return Date.today().set({day: 18}).equals(Date.parsePlus('18')) }
    }, 
    '19': {
      run: function() { },
      assert: function() { return Date.today().set({day: 19}).equals(Date.parsePlus('19')) }
    }, 
    '20': {
      run: function() { },
      assert: function() { return Date.today().set({day: 20}).equals(Date.parsePlus('20')) }
    }, 
    '21': {
      run: function() { },
      assert: function() { return Date.today().set({day: 21}).equals(Date.parsePlus('21')) }
    }, 
    '22': {
      run: function() { },
      assert: function() { return Date.today().set({day: 22}).equals(Date.parsePlus('22')) }
    }, 
    '23': {
      run: function() { },
      assert: function() { return Date.today().set({day: 23}).equals(Date.parsePlus('23')) }
    }, 
    '24': {
      run: function() { },
      assert: function() { return Date.today().set({day: 24}).equals(Date.parsePlus('24')) }
    },     
    '25': {
      run: function() { },
      assert: function() { return Date.today().set({day: 25}).equals(Date.parsePlus('25')) }
    }, 
    '26': {
      run: function() { },
      assert: function() { return Date.today().set({day: 26}).equals(Date.parsePlus('26')) }
    }, 
    '27': {
      run: function() { },
      assert: function() { return Date.today().set({day: 27}).equals(Date.parsePlus('27')) }
    }, 
    '28': {
      run: function() { },
      assert: function() { return Date.today().set({day: 28}).equals(Date.parsePlus('28')) }
    }, 
    
	'29 : Returns null if current month does not have 29 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parsePlus('29');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 29 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 29 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'30 : Returns null if current month does not have 30 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parsePlus('30');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 30 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 30 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'31 : Returns null if current month does not have 31 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parsePlus('31');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) == 31 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 31 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},	
	'32 : Year 1932': {
    run: function() { },
		assert: function() {
            return Date.today().set( { year: 1932 } ).equals( Date.parsePlus('32') );
		}
	},
	
	
	
     '1st': {
      run: function() { },
      assert: function() { return Date.today().set({day: 1}).equals(Date.parsePlus('1st')) }
    }, 
    '2nd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 2}).equals(Date.parsePlus('2nd')) }
    }, 
    '3rd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 3}).equals(Date.parsePlus('3rd')) }
    }, 
    '4th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 4}).equals(Date.parsePlus('4th')) }
    }, 
    '5th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 5}).equals(Date.parsePlus('5th')) }
    }, 
    '6th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 6}).equals(Date.parsePlus('6th')) }
    }, 
    '7th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 7}).equals(Date.parsePlus('7th')) }
    }, 
    '8th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 8}).equals(Date.parsePlus('8th')) }
    }, 
    '9th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 9}).equals(Date.parsePlus('9th')) }
    }, 
    '10th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 10}).equals(Date.parsePlus('10th')) }
    }, 
    '11th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 11}).equals(Date.parsePlus('11th')) }
    }, 
    '12th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 12}).equals(Date.parsePlus('12th')) }
    }, 
    '13th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 13}).equals(Date.parsePlus('13th')) }
    }, 
    '14th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 14}).equals(Date.parsePlus('14th')) }
    }, 
    '15th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 15}).equals(Date.parsePlus('15th')) }
    }, 
    '16th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 16}).equals(Date.parsePlus('16th')) }
    }, 
    '17th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 17}).equals(Date.parsePlus('17th')) }
    }, 
    '18th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 18}).equals(Date.parsePlus('18th')) }
    }, 
    '19th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 19}).equals(Date.parsePlus('19th')) }
    }, 
    '20th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 20}).equals(Date.parsePlus('20th')) }
    }, 
    '21st': {
      run: function() { },
      assert: function() { return Date.today().set({day: 21}).equals(Date.parsePlus('21st')) }
    }, 
    '22nd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 22}).equals(Date.parsePlus('22nd')) }
    }, 
    '23rd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 23}).equals(Date.parsePlus('23rd')) }
    }, 
    '24th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 24}).equals(Date.parsePlus('24th')) }
    },     
    '25th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 25}).equals(Date.parsePlus('25th')) }
    }, 
    '26th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 26}).equals(Date.parsePlus('26th')) }
    }, 
    '27th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 27}).equals(Date.parsePlus('27th')) }
    }, 
    '28th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 28}).equals(Date.parsePlus('28th')) }
    },
    
    
       
	'29th : Returns null if current month does not have 29 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parsePlus('29th');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 29 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 29 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'30th : Returns null if current month does not have 30 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parsePlus('30th');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 30 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 30 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'31st : Returns null if current month does not have 31 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parsePlus('31st');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) == 31 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 31 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},		
    '1 st': {
      run: function() { },
      assert: function() { return Date.today().set({day: 1}).equals(Date.parsePlus('1 st')) }
    }, 
    '2 nd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 2}).equals(Date.parsePlus('2 nd')) }
    }, 
    '3 rd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 3}).equals(Date.parsePlus('3 rd')) }
    }, 
    '4 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 4}).equals(Date.parsePlus('4 th')) }
    }, 
    '5 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 5}).equals(Date.parsePlus('5 th')) }
    }, 
    '6 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 6}).equals(Date.parsePlus('6 th')) }
    }, 
    '7 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 7}).equals(Date.parsePlus('7 th')) }
    }, 
    '8 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 8}).equals(Date.parsePlus('8 th')) }
    }, 
    '9 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 9}).equals(Date.parsePlus('9 th')) }
    }, 
    '10 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 10}).equals(Date.parsePlus('10 th')) }
    }, 
    '11 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 11}).equals(Date.parsePlus('11 th')) }
    }, 
    '12 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 12}).equals(Date.parsePlus('12 th')) }
    }, 
    '13 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 13}).equals(Date.parsePlus('13 th')) }
    }, 
    '14 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 14}).equals(Date.parsePlus('14 th')) }
    }, 
    '15 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 15}).equals(Date.parsePlus('15 th')) }
    }, 
    '16 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 16}).equals(Date.parsePlus('16 th')) }
    }, 
    '17 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 17}).equals(Date.parsePlus('17 th')) }
    }, 
    '18 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 18}).equals(Date.parsePlus('18 th')) }
    }, 
    '19 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 19}).equals(Date.parsePlus('19 th')) }
    }, 
    '20 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 20}).equals(Date.parsePlus('20 th')) }
    }, 
    '21 st': {
      run: function() { },
      assert: function() { return Date.today().set({day: 21}).equals(Date.parsePlus('21 st')) }
    }, 
    '22 nd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 22}).equals(Date.parsePlus('22 nd')) }
    }, 
    '23 rd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 23}).equals(Date.parsePlus('23 rd')) }
    }, 
    '24 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 24}).equals(Date.parsePlus('24 th')) }
    },     
    '25 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 25}).equals(Date.parsePlus('25 th')) }
    }, 
    '26 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 26}).equals(Date.parsePlus('26 th')) }
    }, 
    '27 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 27}).equals(Date.parsePlus('27 th')) }
    }, 
    '28 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 28}).equals(Date.parsePlus('28 th')) }
    },
    
	'29 th : Returns null if current month does not have 29 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parsePlus('29 th');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 29 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 29 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'30 th : Returns null if current month does not have 30 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parsePlus('30 th');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 30 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 30 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'31 st : Returns null if current month does not have 31 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parsePlus('31 st');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) == 31 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 31 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	}
  }
  
});

