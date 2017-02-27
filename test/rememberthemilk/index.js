if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
  'RememberTheMilk': {
    setup: function() { 
        this.now = new Date();
        this.now.setMilliseconds(0);
    },
    'today': {
      run: function() { },
      assert: function() { return Date.today().equals( Date.parsePlus('today') ) }
    },
    'tod': {
      run: function() { },
      assert: function() { return Date.today().equals( Date.parsePlus('tod') ) }
    },
    'tomorrow': {
      run: function() { },
      assert: function() { return Date.today().add(1).day().equals( Date.parsePlus('tomorrow') ) }
    },
    'tom': {
      run: function() { },
      assert: function() { return Date.today().add(1).day().equals( Date.parsePlus('tom') ) }
    },
    '25 Apr': {
      run: function() { },
      assert: function() { return Date.april().set({ day: 25 }).equals( Date.parsePlus('25 Apr') ) }
    },
    'Apr 25': {
      run: function() { },
      assert: function() { return Date.april().set({ day: 25 }).equals( Date.parsePlus('Apr 25') ) }
    },
    '04/25/2007': {
      run: function() { },
      assert: function() { return new Date(2007,3,25).equals( Date.parsePlus('04/25/2007') ) }
    },
    '25/04/2007': {
      run: function() { },
      assert: function() { return new Date(2007,3,25).equals( Date.parsePlus('25/04/2007') ) }
    }, 
    '2006/04/25': {
      run: function() { },
      assert: function() { return new Date(2006,3,25).equals( Date.parsePlus('2006/04/25') ) }
    },
    '2006-04-25': {
      run: function() { },
      assert: function() { return new Date(2006,3,25).equals( Date.parsePlus('2006-04-25') ) }
    },  
    '25th': {
      run: function() { },
      assert: function() { return Date.today().set({ day: 25 }).equals( Date.parsePlus('25th') ) }
    },
    'Friday': {
      run: function() { },
      assert: function() { return Date.friday().equals( Date.parsePlus('Friday') ) }
    }, 
    'Next Friday': {
      run: function() { },
      assert: function() { return Date.today().next().friday().equals( Date.parsePlus('Next Friday') ) }
    },
    'Fri at 7pm': {
      run: function() { },
      assert: function() { return Date.fri().set({ hour: 19 }).equals( Date.parsePlus('Fri at 7pm') ) }
    }, 
    'Fri @ 7pm': {
      run: function() { },
      assert: function() { return Date.fri().set({ hour: 19 }).equals( Date.parsePlus('Fri @ 7pm') ) }
    },  
    '6pm': {
      run: function() { },
      assert: function() { return Date.today().set({ hour: 18 }).equals( Date.parsePlus('6pm') ) }
    },
    '18:00': {
      run: function() { },
      assert: function() { return Date.today().set({ hour: 18 }).equals( Date.parsePlus('18:00') ) }
    }, 
    '5 hours': {
      run: function() { 
        this.date = Date.parsePlus('5 hours');
        this.date.setMilliseconds(0);
      },
      assert: function() { return this.now.add(5).hours().equals( this.date ) }
    },
    '2 days': {
      run: function() { 
        this.date = Date.parsePlus('2 days');
        this.date.setMilliseconds(0);
      },
      assert: function() { return Date.today().add(2).days().equals( this.date ) }
    },
    
  },
  "Fail: Differences between RememberTheMilk and Date.js": {
    '3 weeks : Datejs uses "+3 weeks."': {
      run: function() { 
        this.date = Date.parsePlus('3 weeks');
        this.date.setMilliseconds(0);
      },
      assert: function() { return Date.today().add(3).weeks().equals( this.date ) }
    },
    'End of month : Not supported currently.': {
      run: function() { },
      assert: function() { return Date.today().moveToLastDayOfMonth().equals( Date.parsePlus('End of month') ) }
    },  
  }
});

