def countApplesAndOranges(s, t, a, b, apples, oranges):
    def overlapper(item, startPoint, overlapStart=s, overlapEnd=t,):
        landing = item + startPoint
        return (landing >= overlapStart) and (landing <= overlapEnd)

    applesLanded = list(filter(lambda apple: overlapper(apple, a), apples))
    orangesLanded = list(filter(lambda orange: overlapper(orange, b), oranges))

    print(len(applesLanded))
    print(len(orangesLanded))


s = 7
t = 11
a = 5
b = 15
apples = [-2, 2, 1]
oranges = [5, -6]

print(
    "Given this values:\n",
    s, t, a, b, apples, oranges,
    "\nResult:",
)

countApplesAndOranges(s, t, a, b, apples, oranges)
