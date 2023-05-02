#! /bin/bash
read input
calculation=`echo $input | bc -l`
printf "%.3f" $calculation