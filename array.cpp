#include <iostream>
using namespace std;
int main()
{
  int arr[] = {1, 2, 3};
  for (int i : arr)
  {
    cout << arr[i];
  }
}