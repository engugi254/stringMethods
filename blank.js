function ifblank(){
  if (str === '') {
      console.log('String is empty');                                                        
  }

  if (str.length === 0) {
   console.log('String is empty');
  }

  if (!str.trim()) {
   console.log('String is empty'); 
  }
}
ifblank('');