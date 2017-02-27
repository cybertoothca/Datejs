if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
  'Overview': {
    setup: function() { },
    'Today': {
      run: function() { this.date = Date.parsePlus('Today'); },
      assert: function() { return Date.today().equals( this.date ) }
    },
    'Yesterday': {
      run: function() { this.date = Date.parsePlus('Yesterday') },
      assert: function() {  return Date.today().addDays(-1).equals( this.date ) }      
    },
    'Tomorrow': {
      run: function() { this.date = Date.parsePlus('Tomorrow') },
      assert: function() { return Date.today().addDays(1).equals( this.date ) }
    }, 
    't = "Today"': {
      run: function() { },
      assert: function() { return Date.today().equals(Date.parsePlus('t')) }
    },
    'tod = "Today"': {
      run: function() { },
      assert: function() { return Date.today().equals(Date.parsePlus('tod')) }
    },
    'yes = "Yesterday"': {
      run: function() { },
      assert: function() {  return Date.today().add(-1).days().equals(Date.parsePlus('yes')) }
    },
    'tom = "Tomorrow"': {
      run: function() { },
      assert: function() { return Date.today().add(1).day().equals(Date.parsePlus('tom')) }
    }
  },
'Relative Days': {
    setup: function() { },
    'last monday': {
      run: function() { },
      assert: function() {  return Date.today().last().monday().equals(Date.parsePlus('last monday')) }
    },
    'last mon': {
      run: function() { },
      assert: function() {  return Date.today().last().monday().equals(Date.parsePlus('last mon')) }
    },
    'last mo': {
      run: function() { },
      assert: function() {  return Date.today().last().monday().equals(Date.parsePlus('last mo')) }
    },    
    'last tuesday': {
      run: function() { },
      assert: function() {  return Date.today().last().tuesday().equals(Date.parsePlus('last tuesday')) }
    },
    'last tues': {
      run: function() { },
      assert: function() {  return Date.today().last().tuesday().equals(Date.parsePlus('last tues')) }
    },
    'last tue': {
      run: function() { },
      assert: function() {  return Date.today().last().tuesday().equals(Date.parsePlus('last tue')) }
    },
    'last tu': {
      run: function() { },
      assert: function() {  return Date.today().last().tuesday().equals(Date.parsePlus('last tu')) }
    },     
    'last wednesday': {
      run: function() { },
      assert: function() {  return Date.today().last().wednesday().equals(Date.parsePlus('last wednesday')) }
    },
    'last wed': {
      run: function() { },
      assert: function() {  return Date.today().last().wednesday().equals(Date.parsePlus('last wed')) }
    }, 
    'last we': {
      run: function() { },
      assert: function() {  return Date.today().last().wednesday().equals(Date.parsePlus('last we')) }
    },       
    'last thursday': {
      run: function() { },
      assert: function() {  return Date.today().last().thursday().equals(Date.parsePlus('last thursday')) }
    },
    'last thurs': {
      run: function() { },
      assert: function() {  return Date.today().last().thursday().equals(Date.parsePlus('last thurs')) }
    },  
    'last thur': {
      run: function() { },
      assert: function() {  return Date.today().last().thursday().equals(Date.parsePlus('last thur')) }
    },
    'last thu': {
      run: function() { },
      assert: function() {  return Date.today().last().thursday().equals(Date.parsePlus('last thu')) }
    },
//    'last th': {
//      run: function() { },
//      assert: function() {  return Date.today().last().thursday().equals(Date.parse('last th')) }
//    },    
    'last friday': {
      run: function() { },
      assert: function() {  return Date.today().last().friday().equals(Date.parsePlus('last friday')) }
    },
    'last fri': {
      run: function() { },
      assert: function() {  return Date.today().last().friday().equals(Date.parsePlus('last fri')) }
    },
    'last fr': {
      run: function() { },
      assert: function() {  return Date.today().last().friday().equals(Date.parsePlus('last fr')) }
    },    
    'last saturday': {
      run: function() { },
      assert: function() {  return Date.today().last().saturday().equals(Date.parsePlus('last saturday')) }
    },
    'last sat': {
      run: function() { },
      assert: function() {  return Date.today().last().saturday().equals(Date.parsePlus('last sat')) }
    }, 
    'last sa': {
      run: function() { },
      assert: function() {  return Date.today().last().saturday().equals(Date.parsePlus('last sa')) }
    },         
    'last sunday': {
      run: function() { },
      assert: function() {  return Date.today().last().sunday().equals(Date.parsePlus('last sunday')) }
    },
    'last sun': {
      run: function() { },
      assert: function() {  return Date.today().last().sunday().equals(Date.parsePlus('last sun')) }
    }, 
    'last su': {
      run: function() { },
      assert: function() {  return Date.today().last().sunday().equals(Date.parsePlus('last su')) }
    },     
'prev monday': {
      run: function() { },
      assert: function() {  return Date.today().prev().monday().equals(Date.parsePlus('prev monday')) }
    },
    'prev mon': {
      run: function() { },
      assert: function() {  return Date.today().prev().monday().equals(Date.parsePlus('prev mon')) }
    },
'prev mo': {
      run: function() { },
      assert: function() {  return Date.today().prev().monday().equals(Date.parsePlus('prev mo')) }
    },    
    'prev tuesday': {
      run: function() { },
      assert: function() {  return Date.today().prev().tuesday().equals(Date.parsePlus('prev tuesday')) }
    },
    'prev tues': {
      run: function() { },
      assert: function() {  return Date.today().prev().tuesday().equals(Date.parsePlus('prev tues')) }
    },
    'prev tue': {
      run: function() { },
      assert: function() {  return Date.today().prev().tuesday().equals(Date.parsePlus('prev tue')) }
    }, 
    'prev tu': {
      run: function() { },
      assert: function() {  return Date.today().prev().tuesday().equals(Date.parsePlus('prev tu')) }
    },     
    'prev wednesday': {
      run: function() { },
      assert: function() {  return Date.today().prev().wednesday().equals(Date.parsePlus('prev wednesday')) }
    },
    'prev wed': {
      run: function() { },
      assert: function() {  return Date.today().prev().wednesday().equals(Date.parsePlus('prev wed')) }
    }, 
    'prev we': {
      run: function() { },
      assert: function() {  return Date.today().prev().wednesday().equals(Date.parsePlus('prev we')) }
    },       
    'prev thursday': {
      run: function() { },
      assert: function() {  return Date.today().prev().thursday().equals(Date.parsePlus('prev thursday')) }
    },
    'prev thurs': {
      run: function() { },
      assert: function() {  return Date.today().prev().thursday().equals(Date.parsePlus('prev thurs')) }
    },  
    'prev thur': {
      run: function() { },
      assert: function() {  return Date.today().prev().thursday().equals(Date.parsePlus('prev thur')) }
    },
    'prev thu': {
      run: function() { },
      assert: function() {  return Date.today().prev().thursday().equals(Date.parsePlus('prev thu')) }
    },
//    'prev th': {
//      run: function() { },
//      assert: function() {  return Date.today().prev().thursday().equals(Date.parse('prev th')) }
//    },    
    'prev friday': {
      run: function() { },
      assert: function() {  return Date.today().prev().friday().equals(Date.parsePlus('prev friday')) }
    },
    'prev fri': {
      run: function() { },
      assert: function() {  return Date.today().prev().friday().equals(Date.parsePlus('prev fri')) }
    },
    'prev fr': {
      run: function() { },
      assert: function() {  return Date.today().prev().friday().equals(Date.parsePlus('prev fr')) }
    },    
    'prev saturday': {
      run: function() { },
      assert: function() {  return Date.today().prev().saturday().equals(Date.parsePlus('prev saturday')) }
    },
    'prev sat': {
      run: function() { },
      assert: function() {  return Date.today().prev().saturday().equals(Date.parsePlus('prev sat')) }
    }, 
    'prev sa': {
      run: function() { },
      assert: function() {  return Date.today().prev().saturday().equals(Date.parsePlus('prev sa')) }
    },         
    'prev sunday': {
      run: function() { },
      assert: function() {  return Date.today().prev().sunday().equals(Date.parsePlus('prev sunday')) }
    },
    'prev sun': {
      run: function() { },
      assert: function() {  return Date.today().prev().sunday().equals(Date.parsePlus('prev sun')) }
    },
    'prev su': {
      run: function() { },
      assert: function() {  return Date.today().prev().sunday().equals(Date.parsePlus('prev su')) }
    },     
    
'previous monday': {
      run: function() { },
      assert: function() {  return Date.today().previous().monday().equals(Date.parsePlus('previous monday')) }
    },
    'previous mon': {
      run: function() { },
      assert: function() {  return Date.today().previous().monday().equals(Date.parsePlus('previous mon')) }
    },
   'previous mo': {
      run: function() { },
      assert: function() {  return Date.today().previous().monday().equals(Date.parsePlus('previous mo')) }
    },    
    'previous tuesday': {
      run: function() { },
      assert: function() {  return Date.today().previous().tuesday().equals(Date.parsePlus('previous tuesday')) }
    },
    'previous tues': {
      run: function() { },
      assert: function() {  return Date.today().previous().tuesday().equals(Date.parsePlus('previous tues')) }
    },
    'previous tue': {
      run: function() { },
      assert: function() {  return Date.today().previous().tuesday().equals(Date.parsePlus('previous tue')) }
    }, 
    'previous tu': {
      run: function() { },
      assert: function() {  return Date.today().previous().tuesday().equals(Date.parsePlus('previous tu')) }
    },     
    'previous wednesday': {
      run: function() { },
      assert: function() {  return Date.today().previous().wednesday().equals(Date.parsePlus('previous wednesday')) }
    },
    'previous wed': {
      run: function() { },
      assert: function() {  return Date.today().previous().wednesday().equals(Date.parsePlus('previous wed')) }
    }, 
    'previous we': {
      run: function() { },
      assert: function() {  return Date.today().previous().wednesday().equals(Date.parsePlus('previous we')) }
    },       
    'previous thursday': {
      run: function() { },
      assert: function() {  return Date.today().previous().thursday().equals(Date.parsePlus('previous thursday')) }
    },
    'previous thurs': {
      run: function() { },
      assert: function() {  return Date.today().previous().thursday().equals(Date.parsePlus('previous thurs')) }
    },  
    'previous thur': {
      run: function() { },
      assert: function() {  return Date.today().previous().thursday().equals(Date.parsePlus('previous thur')) }
    },
    'previous thu': {
      run: function() { },
      assert: function() {  return Date.today().previous().thursday().equals(Date.parsePlus('previous thu')) }
    },
//    'previous th': {
//      run: function() { },
//      assert: function() {  return Date.today().previous().thursday().equals(Date.parse('previous th')) }
//    },    
    'previous friday': {
      run: function() { },
      assert: function() {  return Date.today().previous().friday().equals(Date.parsePlus('previous friday')) }
    },
    'previous fri': {
      run: function() { },
      assert: function() {  return Date.today().previous().friday().equals(Date.parsePlus('previous fri')) }
    },
    'previous fr': {
      run: function() { },
      assert: function() {  return Date.today().previous().friday().equals(Date.parsePlus('previous fr')) }
    },    
    'previous saturday': {
      run: function() { },
      assert: function() {  return Date.today().previous().saturday().equals(Date.parsePlus('previous saturday')) }
    },
    'previous sat': {
      run: function() { },
      assert: function() {  return Date.today().previous().saturday().equals(Date.parsePlus('previous sat')) }
    },
'previous sa': {
      run: function() { },
      assert: function() {  return Date.today().previous().saturday().equals(Date.parsePlus('previous sa')) }
    },         
    'previous sunday': {
      run: function() { },
      assert: function() {  return Date.today().previous().sunday().equals(Date.parsePlus('previous sunday')) }
    },
    'previous sun': {
      run: function() { },
      assert: function() {  return Date.today().previous().sunday().equals(Date.parsePlus('previous sun')) }
    },
    'previous su': {
      run: function() { },
      assert: function() {  return Date.today().previous().sunday().equals(Date.parsePlus('previous su')) }
    },    
'next monday': {
      run: function() { },
      assert: function() {  return Date.today().next().monday().equals(Date.parsePlus('next monday')) }
    },
    'next mon': {
      run: function() { },
      assert: function() {  return Date.today().next().monday().equals(Date.parsePlus('next mon')) }
    },
   'next mo': {
      run: function() { },
      assert: function() {  return Date.today().next().monday().equals(Date.parsePlus('next mo')) }
    },    
    'next tuesday': {
      run: function() { },
      assert: function() {  return Date.today().next().tuesday().equals(Date.parsePlus('next tuesday')) }
    },
    'next tues': {
      run: function() { },
      assert: function() {  return Date.today().next().tuesday().equals(Date.parsePlus('next tues')) }
    },
    'next tue': {
      run: function() { },
      assert: function() {  return Date.today().next().tuesday().equals(Date.parsePlus('next tue')) }
    }, 
    'next tu': {
      run: function() { },
      assert: function() {  return Date.today().next().tuesday().equals(Date.parsePlus('next tu')) }
    },     
    'next wednesday': {
      run: function() { },
      assert: function() {  return Date.today().next().wednesday().equals(Date.parsePlus('next wednesday')) }
    },
    'next wed': {
      run: function() { },
      assert: function() {  return Date.today().next().wednesday().equals(Date.parsePlus('next wed')) }
    }, 
    'next we': {
      run: function() { },
      assert: function() {  return Date.today().next().wednesday().equals(Date.parsePlus('next we')) }
    },       
    'next thursday': {
      run: function() { },
      assert: function() {  return Date.today().next().thursday().equals(Date.parsePlus('next thursday')) }
    },
    'next thurs': {
      run: function() { },
      assert: function() {  return Date.today().next().thursday().equals(Date.parsePlus('next thurs')) }
    },  
    'next thur': {
      run: function() { },
      assert: function() {  return Date.today().next().thursday().equals(Date.parsePlus('next thur')) }
    },
    'next thu': {
      run: function() { },
      assert: function() {  return Date.today().next().thursday().equals(Date.parsePlus('next thu')) }
    },
//    'next th': {
//      run: function() { },
//      assert: function() {  return Date.today().next().thursday().equals(Date.parse('next th')) }
//    },    
    'next friday': {
      run: function() { },
      assert: function() {  return Date.today().next().friday().equals(Date.parsePlus('next friday')) }
    },
    'next fri': {
      run: function() { },
      assert: function() {  return Date.today().next().friday().equals(Date.parsePlus('next fri')) }
    },
    'next fr': {
      run: function() { },
      assert: function() {  return Date.today().next().friday().equals(Date.parsePlus('next fr')) }
    },
    'next saturday': {
      run: function() { },
      assert: function() {  return Date.today().next().saturday().equals(Date.parsePlus('next saturday')) }
    },
    'next sat': {
      run: function() { },
      assert: function() {  return Date.today().next().saturday().equals(Date.parsePlus('next sat')) }
    }, 
    'next sa': {
      run: function() { },
      assert: function() {  return Date.today().next().saturday().equals(Date.parsePlus('next sa')) }
    },         
    'next sunday': {
      run: function() { },
      assert: function() {  return Date.today().next().sunday().equals(Date.parsePlus('next sunday')) }
    },
    'next sun': {
      run: function() { },
      assert: function() {  return Date.today().next().sunday().equals(Date.parsePlus('next sun')) }
    },
    'next su': {
      run: function() { },
      assert: function() {  return Date.today().next().sunday().equals(Date.parsePlus('next su')) }
    } 
                 
  },
'Relative Months': {
    setup: function() { },
    'last january': {
      run: function() { },
      assert: function() { return Date.today().last().january().equals(Date.parsePlus('last january')) }
    },
    'last jan': {
      run: function() { },
      assert: function() { return Date.today().last().january().equals(Date.parsePlus('last jan')) }
    },    
    'last february': {
      run: function() { },
      assert: function() { return Date.today().last().february().equals(Date.parsePlus('last february')) }
    }, 
    'last feb': {
      run: function() { },
      assert: function() { return Date.today().last().february().equals(Date.parsePlus('last feb')) }
    },        
    'last march': {
      run: function() { },
      assert: function() { return Date.today().last().march().equals(Date.parsePlus('last march')) }
    }, 
    'last mar': {
      run: function() { },
      assert: function() { return Date.today().last().march().equals(Date.parsePlus('last mar')) }
    },
    'last april': {
      run: function() { },
      assert: function() { return Date.today().last().april().equals(Date.parsePlus('last april')) }
    },
    'last apr': {
      run: function() { },
      assert: function() { return Date.today().last().apr().equals(Date.parsePlus('last apr')) }
    },
    'last may': {
      run: function() { },
      assert: function() { return Date.today().last().may().equals(Date.parsePlus('last may')) }
    },     
    'last june': {
      run: function() { },
      assert: function() { return Date.today().last().june().equals(Date.parsePlus('last june')) }
    },     
    'last jun': {
      run: function() { },
      assert: function() { return Date.today().last().june().equals(Date.parsePlus('last jun')) }
    },    
    'last july': {
      run: function() { },
      assert: function() { return Date.today().last().july().equals(Date.parsePlus('last july')) }
    },
    'last jul': {
      run: function() { },
      assert: function() { return Date.today().last().july().equals(Date.parsePlus('last july')) }
    },
    'last august': {
      run: function() { },
      assert: function() { return Date.today().last().august().equals(Date.parsePlus('last august')) }
    },
    'last aug': {
      run: function() { },
      assert: function() { return Date.today().last().august().equals(Date.parsePlus('last aug')) }
    },
    'last september': {
      run: function() { },
      assert: function() { return Date.today().last().september().equals(Date.parsePlus('last september')) }
    },
    'last sept': {
      run: function() { },
      assert: function() { return Date.today().last().september().equals(Date.parsePlus('last sept')) }
    },
    'last sep': {
      run: function() { },
      assert: function() { return Date.today().last().sep().equals(Date.parsePlus('last sep')) }
    },
    'last october': {
      run: function() { },
      assert: function() { return Date.today().last().october().equals(Date.parsePlus('last october')) }
    },     
    'last oct': {
      run: function() { },
      assert: function() { return Date.today().last().october().equals(Date.parsePlus('last oct')) }
    },
    'last november': {
      run: function() { },
      assert: function() { return Date.today().last().november().equals(Date.parsePlus('last november')) }
    }, 
    'last nov': {
      run: function() { },
      assert: function() { return Date.today().last().november().equals(Date.parsePlus('last nov')) }
    },     
    'last december': {
      run: function() { },
      assert: function() { return Date.today().last().december().equals(Date.parsePlus('last december')) }
    },
    'last dec': {
      run: function() { },
      assert: function() { return Date.today().last().december().equals(Date.parsePlus('last dec')) }
    },
'prev january': {
      run: function() { },
      assert: function() { return Date.today().prev().january().equals(Date.parsePlus('prev january')) }
    },
    'prev jan': {
      run: function() { },
      assert: function() { return Date.today().prev().january().equals(Date.parsePlus('prev jan')) }
    },    
    'prev february': {
      run: function() { },
      assert: function() { return Date.today().prev().february().equals(Date.parsePlus('prev february')) }
    }, 
    'prev feb': {
      run: function() { },
      assert: function() { return Date.today().prev().february().equals(Date.parsePlus('prev feb')) }
    },        
    'prev march': {
      run: function() { },
      assert: function() { return Date.today().prev().march().equals(Date.parsePlus('prev march')) }
    }, 
    'prev mar': {
      run: function() { },
      assert: function() { return Date.today().prev().march().equals(Date.parsePlus('prev mar')) }
    },
    'prev april': {
      run: function() { },
      assert: function() { return Date.today().prev().april().equals(Date.parsePlus('prev april')) }
    },
    'prev apr': {
      run: function() { },
      assert: function() { return Date.today().prev().apr().equals(Date.parsePlus('prev apr')) }
    },
    'prev may': {
      run: function() { },
      assert: function() { return Date.today().prev().may().equals(Date.parsePlus('prev may')) }
    },     
    'prev june': {
      run: function() { },
      assert: function() { return Date.today().prev().june().equals(Date.parsePlus('prev june')) }
    },     
    'prev jun': {
      run: function() { },
      assert: function() { return Date.today().prev().june().equals(Date.parsePlus('prev jun')) }
    },    
    'prev july': {
      run: function() { },
      assert: function() { return Date.today().prev().july().equals(Date.parsePlus('prev july')) }
    },
    'prev jul': {
      run: function() { },
      assert: function() { return Date.today().prev().july().equals(Date.parsePlus('prev july')) }
    },
    'prev august': {
      run: function() { },
      assert: function() { return Date.today().prev().august().equals(Date.parsePlus('prev august')) }
    },
    'prev aug': {
      run: function() { },
      assert: function() { return Date.today().prev().august().equals(Date.parsePlus('prev aug')) }
    },
    'prev september': {
      run: function() { },
      assert: function() { return Date.today().prev().september().equals(Date.parsePlus('prev september')) }
    },
    'prev sept': {
      run: function() { },
      assert: function() { return Date.today().prev().september().equals(Date.parsePlus('prev sept')) }
    },
    'prev sep': {
      run: function() { },
      assert: function() { return Date.today().prev().sep().equals(Date.parsePlus('prev sep')) }
    },
    'prev october': {
      run: function() { },
      assert: function() { return Date.today().prev().october().equals(Date.parsePlus('prev october')) }
    },     
    'prev oct': {
      run: function() { },
      assert: function() { return Date.today().prev().october().equals(Date.parsePlus('prev oct')) }
    },
    'prev november': {
      run: function() { },
      assert: function() { return Date.today().prev().november().equals(Date.parsePlus('prev november')) }
    }, 
    'prev nov': {
      run: function() { },
      assert: function() { return Date.today().prev().november().equals(Date.parsePlus('prev nov')) }
    },     
    'prev december': {
      run: function() { },
      assert: function() { return Date.today().prev().december().equals(Date.parsePlus('prev december')) }
    },
    'prev dec': {
      run: function() { },
      assert: function() { return Date.today().prev().december().equals(Date.parsePlus('prev dec')) }
    },

'previous january': {
      run: function() { },
      assert: function() { return Date.today().previous().january().equals(Date.parsePlus('previous january')) }
    },
    'previous jan': {
      run: function() { },
      assert: function() { return Date.today().previous().january().equals(Date.parsePlus('previous jan')) }
    },    
    'previous february': {
      run: function() { },
      assert: function() { return Date.today().previous().february().equals(Date.parsePlus('previous february')) }
    }, 
    'previous feb': {
      run: function() { },
      assert: function() { return Date.today().previous().february().equals(Date.parsePlus('previous feb')) }
    },        
    'previous march': {
      run: function() { },
      assert: function() { return Date.today().previous().march().equals(Date.parsePlus('previous march')) }
    }, 
    'previous mar': {
      run: function() { },
      assert: function() { return Date.today().previous().march().equals(Date.parsePlus('previous mar')) }
    },
    'previous april': {
      run: function() { },
      assert: function() { return Date.today().previous().april().equals(Date.parsePlus('previous april')) }
    },
    'previous apr': {
      run: function() { },
      assert: function() { return Date.today().previous().apr().equals(Date.parsePlus('previous apr')) }
    },
    'previous may': {
      run: function() { },
      assert: function() { return Date.today().previous().may().equals(Date.parsePlus('previous may')) }
    },     
    'previous june': {
      run: function() { },
      assert: function() { return Date.today().previous().june().equals(Date.parsePlus('previous june')) }
    },     
    'previous jun': {
      run: function() { },
      assert: function() { return Date.today().previous().june().equals(Date.parsePlus('previous jun')) }
    },    
    'previous july': {
      run: function() { },
      assert: function() { return Date.today().previous().july().equals(Date.parsePlus('previous july')) }
    },
    'previous jul': {
      run: function() { },
      assert: function() { return Date.today().previous().july().equals(Date.parsePlus('previous july')) }
    },
    'previous august': {
      run: function() { },
      assert: function() { return Date.today().previous().august().equals(Date.parsePlus('previous august')) }
    },
    'previous aug': {
      run: function() { },
      assert: function() { return Date.today().previous().august().equals(Date.parsePlus('previous aug')) }
    },
    'previous september': {
      run: function() { },
      assert: function() { return Date.today().previous().september().equals(Date.parsePlus('previous september')) }
    },
    'previous sept': {
      run: function() { },
      assert: function() { return Date.today().previous().september().equals(Date.parsePlus('previous sept')) }
    },
    'previous sep': {
      run: function() { },
      assert: function() { return Date.today().previous().sep().equals(Date.parsePlus('previous sep')) }
    },
    'previous october': {
      run: function() { },
      assert: function() { return Date.today().previous().october().equals(Date.parsePlus('previous october')) }
    },     
    'previous oct': {
      run: function() { },
      assert: function() { return Date.today().previous().october().equals(Date.parsePlus('previous oct')) }
    },
    'previous november': {
      run: function() { },
      assert: function() { return Date.today().previous().november().equals(Date.parsePlus('previous november')) }
    }, 
    'previous nov': {
      run: function() { },
      assert: function() { return Date.today().previous().november().equals(Date.parsePlus('previous nov')) }
    },     
    'previous december': {
      run: function() { },
      assert: function() { return Date.today().previous().december().equals(Date.parsePlus('previous december')) }
    },
    'previous dec': {
      run: function() { },
      assert: function() { return Date.today().previous().december().equals(Date.parsePlus('previous dec')) }
    },


    'next january': {
      run: function() { },
      assert: function() { return Date.today().next().january().equals(Date.parsePlus('next january')) }
    },
    'next jan': {
      run: function() { },
      assert: function() { return Date.today().next().january().equals(Date.parsePlus('next jan')) }
    },    
    'next february': {
      run: function() { },
      assert: function() { return Date.today().next().february().equals(Date.parsePlus('next february')) }
    }, 
    'next feb': {
      run: function() { },
      assert: function() { return Date.today().next().february().equals(Date.parsePlus('next feb')) }
    },        
    'next march': {
      run: function() { },
      assert: function() { return Date.today().next().march().equals(Date.parsePlus('next march')) }
    }, 
    'next mar': {
      run: function() { },
      assert: function() { return Date.today().next().march().equals(Date.parsePlus('next mar')) }
    },
    'next april': {
      run: function() { },
      assert: function() { return Date.today().next().april().equals(Date.parsePlus('next april')) }
    },
    'next apr': {
      run: function() { },
      assert: function() { return Date.today().next().apr().equals(Date.parsePlus('next apr')) }
    },
    'next may': {
      run: function() { },
      assert: function() { return Date.today().next().may().equals(Date.parsePlus('next may')) }
    },     
    'next june': {
      run: function() { },
      assert: function() { return Date.today().next().june().equals(Date.parsePlus('next june')) }
    },     
    'next jun': {
      run: function() { },
      assert: function() { return Date.today().next().june().equals(Date.parsePlus('next jun')) }
    },    
    'next july': {
      run: function() { },
      assert: function() { return Date.today().next().july().equals(Date.parsePlus('next july')) }
    },
    'next jul': {
      run: function() { },
      assert: function() { return Date.today().next().july().equals(Date.parsePlus('next july')) }
    },
    'next august': {
      run: function() { },
      assert: function() { return Date.today().next().august().equals(Date.parsePlus('next august')) }
    },
    'next aug': {
      run: function() { },
      assert: function() { return Date.today().next().august().equals(Date.parsePlus('next aug')) }
    },
    'next september': {
      run: function() { },
      assert: function() { return Date.today().next().september().equals(Date.parsePlus('next september')) }
    },
    'next sept': {
      run: function() { },
      assert: function() { return Date.today().next().september().equals(Date.parsePlus('next sept')) }
    },
    'next sep': {
      run: function() { },
      assert: function() { return Date.today().next().sep().equals(Date.parsePlus('next sep')) }
    },
    'next october': {
      run: function() { },
      assert: function() { return Date.today().next().october().equals(Date.parsePlus('next october')) }
    },     
    'next oct': {
      run: function() { },
      assert: function() { return Date.today().next().october().equals(Date.parsePlus('next oct')) }
    },
    'next november': {
      run: function() { },
      assert: function() { return Date.today().next().november().equals(Date.parsePlus('next november')) }
    }, 
    'next nov': {
      run: function() { },
      assert: function() { return Date.today().next().november().equals(Date.parsePlus('next nov')) }
    },     
    'next december': {
      run: function() { },
      assert: function() { return Date.today().next().december().equals(Date.parsePlus('next december')) }
    },
    'next dec': {
      run: function() { },
      assert: function() { return Date.today().next().december().equals(Date.parsePlus('next dec')) }
    }       
  },
'Relative Date Element Parts': {
    setup: function() { },
    'last seconds': {
      run: function() { },
      assert: function() { return new Date().last().second().set({millisecond: 0}).equals(Date.parsePlus('last seconds').set({millisecond: 0})) }
    }, 
    'last second': {
      run: function() { },
      assert: function() { return new Date().last().second().set({millisecond: 0}).equals(Date.parsePlus('last second').set({millisecond: 0})) }
    },
    'last sec': {
      run: function() { },
      assert: function() { return new Date().last().second().set({millisecond: 0}).equals(Date.parsePlus('last sec').set({millisecond: 0})) }
    },
    'last minutes': {
      run: function() { },
      assert: function() { return new Date().last().minute().set({millisecond: 0}).equals(Date.parsePlus('last minutes').set({millisecond: 0})) }
    },
    'last minute': {
      run: function() { },
      assert: function() { return new Date().last().minute().set({millisecond: 0}).equals(Date.parsePlus('last minute').set({millisecond: 0})) }
    },
    'last min': {
      run: function() { },
      assert: function() { return new Date().last().minute().set({millisecond: 0}).equals(Date.parsePlus('last min').set({millisecond: 0})) }
    },
    'last mn': {
      run: function() { },
      assert: function() { return new Date().last().minute().set({millisecond: 0}).equals(Date.parsePlus('last mn').set({millisecond: 0})) }
    },    
    'last hours': {
      run: function() { },
      assert: function() { return new Date().last().hour().set({millisecond: 0}).equals(Date.parsePlus('last hours').set({millisecond: 0})) }
    },
    'last hour': {
      run: function() { },
      assert: function() { return new Date().last().hour().set({millisecond: 0}).equals(Date.parsePlus('last hour').set({millisecond: 0})) }
    },
    'last days': {
      run: function() { },
      assert: function() { return Date.today().last().day().equals(Date.parsePlus('last days')) }
    },
    'last day': {
      run: function() { },
      assert: function() { return Date.today().last().day().equals(Date.parsePlus('last day')) }
    },
    'last weeks': {
      run: function() { },
      assert: function() { return Date.today().last().week().equals(Date.parsePlus('last weeks')) }
    },    
    'last week': {
      run: function() { },
      assert: function() { return Date.today().last().week().equals(Date.parsePlus('last week')) }
    },
    'last months': {
      run: function() { },
      assert: function() { return Date.today().last().month().equals(Date.parsePlus('last months')) }
    },
    'last month': {
      run: function() { },
      assert: function() { return Date.today().last().month().equals(Date.parsePlus('last month')) }
    },
    'last years': {
      run: function() { },
      assert: function() { return Date.today().last().year().equals(Date.parsePlus('last years')) }
    },
    'last year': {
      run: function() { },
      assert: function() { return Date.today().last().year().equals(Date.parsePlus('last year')) }
    },
'prev seconds': {
      run: function() { },
      assert: function() { return new Date().prev().second().set({millisecond: 0}).equals(Date.parsePlus('prev seconds').set({millisecond: 0})) }
    }, 
    'prev second': {
      run: function() { },
      assert: function() { return new Date().prev().second().set({millisecond: 0}).equals(Date.parsePlus('prev second').set({millisecond: 0})) }
    },
    'prev sec': {
      run: function() { },
      assert: function() { return new Date().prev().second().set({millisecond: 0}).equals(Date.parsePlus('prev sec').set({millisecond: 0})) }
    },
    'prev minutes': {
      run: function() { },
      assert: function() { return new Date().prev().minute().set({millisecond: 0}).equals(Date.parsePlus('prev minutes').set({millisecond: 0})) }
    },
    'prev minute': {
      run: function() { },
      assert: function() { return new Date().prev().minute().set({millisecond: 0}).equals(Date.parsePlus('prev minute').set({millisecond: 0})) }
    },
    'prev min': {
      run: function() { },
      assert: function() { return new Date().prev().minute().set({millisecond: 0}).equals(Date.parsePlus('prev min').set({millisecond: 0})) }
    },
    'prev mn': {
      run: function() { },
      assert: function() { return new Date().prev().minute().set({millisecond: 0}).equals(Date.parsePlus('prev mn').set({millisecond: 0})) }
    },    
    'prev hours': {
      run: function() { },
      assert: function() { return new Date().prev().hour().set({millisecond: 0}).equals(Date.parsePlus('prev hours').set({millisecond: 0})) }
    },
    'prev hour': {
      run: function() { },
      assert: function() { return new Date().prev().hour().set({millisecond: 0}).equals(Date.parsePlus('prev hour').set({millisecond: 0})) }
    },
    'prev days': {
      run: function() { },
      assert: function() { return Date.today().prev().day().equals(Date.parsePlus('prev days')) }
    },
    'prev day': {
      run: function() { },
      assert: function() { return Date.today().prev().day().equals(Date.parsePlus('prev day')) }
    },
    'prev weeks': {
      run: function() { },
      assert: function() { return Date.today().prev().week().equals(Date.parsePlus('prev weeks')) }
    },    
    'prev week': {
      run: function() { },
      assert: function() { return Date.today().prev().week().equals(Date.parsePlus('prev week')) }
    },
    'prev months': {
      run: function() { },
      assert: function() { return Date.today().prev().month().equals(Date.parsePlus('prev months')) }
    },
    'prev month': {
      run: function() { },
      assert: function() { return Date.today().prev().month().equals(Date.parsePlus('prev month')) }
    },
    'prev years': {
      run: function() { },
      assert: function() { return Date.today().prev().year().equals(Date.parsePlus('prev years')) }
    },
    'prev year': {
      run: function() { },
      assert: function() { return Date.today().prev().year().equals(Date.parsePlus('prev year')) }
    }, 
    
'previous seconds': {
      run: function() { },
      assert: function() { return new Date().previous().second().set({millisecond: 0}).equals(Date.parsePlus('previous seconds').set({millisecond: 0})) }
    }, 
    'previous second': {
      run: function() { },
      assert: function() { return new Date().previous().second().set({millisecond: 0}).equals(Date.parsePlus('previous second').set({millisecond: 0})) }
    },
    'previous sec': {
      run: function() { },
      assert: function() { return new Date().previous().second().set({millisecond: 0}).equals(Date.parsePlus('previous sec').set({millisecond: 0})) }
    },
    'previous minutes': {
      run: function() { },
      assert: function() { return new Date().previous().minute().set({millisecond: 0}).equals(Date.parsePlus('previous minutes').set({millisecond: 0})) }
    },
    'previous minute': {
      run: function() { },
      assert: function() { return new Date().previous().minute().set({millisecond: 0}).equals(Date.parsePlus('previous minute').set({millisecond: 0})) }
    },
    'previous min': {
      run: function() { },
      assert: function() { return new Date().previous().minute().set({millisecond: 0}).equals(Date.parsePlus('previous min').set({millisecond: 0})) }
    },
    'previous mn': {
      run: function() { },
      assert: function() { return new Date().previous().minute().set({millisecond: 0}).equals(Date.parsePlus('previous mn').set({millisecond: 0})) }
    },    
    'previous hours': {
      run: function() { },
      assert: function() { return new Date().previous().hour().set({millisecond: 0}).equals(Date.parsePlus('previous hours').set({millisecond: 0})) }
    },
    'previous hour': {
      run: function() { },
      assert: function() { return new Date().previous().hour().set({millisecond: 0}).equals(Date.parsePlus('previous hour').set({millisecond: 0})) }
    },
    'previous days': {
      run: function() { },
      assert: function() { return Date.today().previous().day().equals(Date.parsePlus('previous days')) }
    },
    'previous day': {
      run: function() { },
      assert: function() { return Date.today().previous().day().equals(Date.parsePlus('previous day')) }
    },
    'previous weeks': {
      run: function() { },
      assert: function() { return Date.today().previous().week().equals(Date.parsePlus('previous weeks')) }
    },    
    'previous week': {
      run: function() { },
      assert: function() { return Date.today().previous().week().equals(Date.parsePlus('previous week')) }
    },
    'previous months': {
      run: function() { },
      assert: function() { return Date.today().previous().month().equals(Date.parsePlus('previous months')) }
    },
    'previous month': {
      run: function() { },
      assert: function() { return Date.today().previous().month().equals(Date.parsePlus('previous month')) }
    },
    'previous years': {
      run: function() { },
      assert: function() { return Date.today().previous().year().equals(Date.parsePlus('previous years')) }
    },
    'previous year': {
      run: function() { },
      assert: function() { return Date.today().previous().year().equals(Date.parsePlus('previous year')) }
    },
           
    'next seconds': {
      run: function() { },
      assert: function() { return new Date().next().second().set({millisecond: 0}).equals(Date.parsePlus('next seconds').set({millisecond: 0})) }
    }, 
    'next second': {
      run: function() { },
      assert: function() { return new Date().next().second().set({millisecond: 0}).equals(Date.parsePlus('next second').set({millisecond: 0})) }
    },
    'next sec': {
      run: function() { },
      assert: function() { return new Date().next().second().set({millisecond: 0}).equals(Date.parsePlus('next sec').set({millisecond: 0})) }
    },
    'next minutes': {
      run: function() { },
      assert: function() { return new Date().next().minute().set({millisecond: 0}).equals(Date.parsePlus('next minutes').set({millisecond: 0})) }
    },
    'next minute': {
      run: function() { },
      assert: function() { return new Date().next().minute().set({millisecond: 0}).equals(Date.parsePlus('next minute').set({millisecond: 0})) }
    },
    'next min': {
      run: function() { },
      assert: function() { return new Date().next().minute().set({millisecond: 0}).equals(Date.parsePlus('next min').set({millisecond: 0})) }
    },
    'next mn': {
      run: function() { },
      assert: function() { return new Date().next().minute().set({millisecond: 0}).equals(Date.parsePlus('next mn').set({millisecond: 0})) }
    },    
    'next hours': {
      run: function() { },
      assert: function() { return new Date().next().hour().set({millisecond: 0}).equals(Date.parsePlus('next hours').set({millisecond: 0})) }
    },
    'next hour': {
      run: function() { },
      assert: function() { return new Date().next().hour().set({millisecond: 0}).equals(Date.parsePlus('next hour').set({millisecond: 0})) }
    },
    'next days': {
      run: function() { },
      assert: function() { return Date.today().next().day().equals(Date.parsePlus('next days')) }
    },
    'next day': {
      run: function() { },
      assert: function() { return Date.today().next().day().equals(Date.parsePlus('next day')) }
    },
    'next weeks': {
      run: function() { },
      assert: function() { return Date.today().next().week().equals(Date.parsePlus('next weeks')) }
    },    
    'next week': {
      run: function() { },
      assert: function() { return Date.today().next().week().equals(Date.parsePlus('next week')) }
    },
    'next months': {
      run: function() { },
      assert: function() { return Date.today().next().month().equals(Date.parsePlus('next months')) }
    },
    'next month': {
      run: function() { },
      assert: function() { return Date.today().next().month().equals(Date.parsePlus('next month')) }
    },
    'next years': {
      run: function() { },
      assert: function() { return Date.today().next().year().equals(Date.parsePlus('next years')) }
    },
    'next year': {
      run: function() { },
      assert: function() { return Date.today().next().year().equals(Date.parsePlus('next year')) }
    }    
  }   
});

