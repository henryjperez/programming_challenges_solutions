function staircase(n: number): void {
    let tree = Array(n).fill(" ");
    for (let i = n; i > 0; i--) {
        tree[i - 1] = "#"
        console.log(tree.join(""));
    }
}

const input = 6;

staircase(input);

/*
Output:
     #
    ##
   ###
  ####
 #####
######
*/
