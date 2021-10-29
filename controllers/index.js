const index = {
   
  caixa: (req, res) => {
    res.render("Caixa", {
      titulo: "Saque seu Dinheiro!!!",
    });
  },

  caixaRedirect: (req, res) => {
    res.redirect("/");
  },
 
  script: (req,res) => {
    res.render("script");
  },
        
};

module.exports = index;



