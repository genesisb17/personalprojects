/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

https://leetcode.com/problems/median-of-two-sorted-arrays/description/

difficulty: hard
 * 
 * 
 */

//works unless there's an empty array. this works on 2000/2094 test cases 
var findMedianSortedArrays = function(nums1, nums2) {
    let track1 = 0;
    let track2 = 0;
    let first = 0;
    let second = 0;
    let length = nums1.length + nums2.length
 
    for(let i = 0; i < length/2 + 1; i++){
        first = second;
        if(nums1[track1] <= nums2[track2]){
            second = nums1[track1];
            track1++;
        }else{
            second = nums2[track2];
            track2++;
        }
    }

    return length % 2 == 1 ? first : (first + second)/2;
    
};

// redo with a merged array to account for the empty arrays 