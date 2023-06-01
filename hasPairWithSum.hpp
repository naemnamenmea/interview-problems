#ifndef __study__
#define __study__

#include <bits\stdc++.h>
#include <unordered_set>
#include "..\DataStructures\Graphs.hpp"

using namespace std;

/*
*. Предварительно отсортировать массив
*. Дописать работу с индексами
*. Не передавать массив по ссылке
*/
bool hasPairWithSum(std::vector<int> data, int sum) {

	std::sort(data.begin(), data.end());
	int low = 0;
	int high = data.size() - 1;

	while (low < high) {
		int s = data[low] + data[high];
		if (s == sum) {
			return true;
		}
		(s > sum) ? high-- : low++;
	}
	return false;
}

bool hasPairWithSum(const std::vector<int>& data, int sum) {
	std::unordered_set<int> comp; // complements
	for (int value : data) {
		if (comp.find(value) != comp.end())
			return true;
		comp.insert(sum - value);
	}
	return  false;
}

#endif // __study__