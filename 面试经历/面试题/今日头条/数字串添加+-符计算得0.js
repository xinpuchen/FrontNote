/**
 * 给定一个包含 1-9 数字的字符串（长度范围4-12），字符床的每个位置
 * 都可以选择是否加一个“+”或“-”，要求最好形成一个合法的算式，并且
 * 算出所有可能的组合中计算结果为 0 的组合数量。
 * 比如输入“11”，因为“1+1=0，-1+1=0”，所以输出为 2
 * 输入“111”，输出 8，可能的组合如下
 * 11-11
 * 1+1-1-1
 * 1-1+1-1
 * 1-1-1+1
 * -11+11
 * -1+1+1-1
 * -1+1-1+1
 * -1-1+1+1
 *
 * 输入描述：
 * 一个字符串
 * 输出描述：
 * 一个数字
 *
 * 输入样例：
 * 第一行 N 表示这个测试结合有多少个测试用例，下边 N 行每行是一个 1-9 数字组成的字符串
 * 1
 * 1111
 *
 * 输出描述：
 * 输出样例
 * 输出 N 行整数，对应输入的 N 个测试用例
 * 8
 *
 * 示例一：
 * 输入：
 * 1
 * 1111
 *
 * 输出：
 * 8
 *
 * 说明：
 * 输入 “1111”，输出为 8，可能的组合如下
 * 11-11
 * 1+1-1-1
 * 1-1+1-1
 * 1-1-1+1
 * -11+11
 * -1+1+1-1
 * 11-11
 * 1+1-1-1
 * 1-1+1-1
 * 1-1-1+1
 * -11+11
 * -1+1-1+1
 * -1-1+1+1
 *
 * 备注：
 * 数据范围：
 * 字符串的长度不小于 12， 里面包含的数字是 1-9
 */
