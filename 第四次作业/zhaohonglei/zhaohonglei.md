1.git init     

把这个目录变成Git可以管理的仓库

2.git add 文件    

将文件添加到仓库

3.git commit -m"说明"

把文件提交到仓库

4.git status

查看仓库当前的状态

5.git diff

⽐较⼯作区和暂存区的修改

6.git log

显示全部commit历史

7.git log --pretty=oneline

简化git log

8.git reset --hard HEAD^

回退到上一版本

9.git reset --hard HEAD~100

回退到上第100个版本

10.git reset --hard commit-id

回退到指定commit-id版本

11.git reflog

查看命令记录

12.git diff HEAD -- 文件

查看工作区和版本库里面最新版本的区别

13.git checkout -- 文件/git restore -- 文件

撤销工作区的修改

14.git reset HEAD 文件/git  restore --staged  文件

撤销暂存区修改

15.git rm 文件

在版本库移除工作区文件，且add

16.ssh-keygen -t rsa -C "youremail@example.com"

创建SSH Key

17.git remote add origin git@github.com:github名/远程库名.git

git remote add origin https://github.com//github名/远程库名.git

关联一个远程库

18.git push -u origin master 

第一次推送master的所有内容

git push origin master

以后的推送

19.git remote -v

查看远程库信息

20.git remote rm origin

删除origin（解除绑定关系）

21.git clone git@github.com:github名/远程库名.git

git clone  https://github.com//github名/远程库名.git

克隆出一个本地库

22.git branch

查看分支

23.git branch 分支名

创建分支

24.git checkout 分支名 / git switch 分支名

切换分支

25.git checkout -b 分支名 / git switch -c 分支名

创建+切换分支

26.git merge 分支名

合并分支到当前分支

27.删除分支

git branch -d 分支名

28.git merge --no-ff -m "说明" dev

合并dev 分支（保留dev历史分支，一般fast forward 不保留）

（有冲突必须先commit）

29.git stash

保存当前工作现场

30.git stash list 

查看保留的工作现场

31.git stash apply

恢复工作现场，不删除stash记录

32.git stash drop 

删除stash 记录

33.git stash pop

恢复+删除

34.git stash apply stash@{数字}

恢复指定stash

35.git cherry-pick commit-id

将一个特定提交作用于当前分支

36.git branch -D 分支名

强制删除未合并的分支

37.git remote 

查看远程库的信息

38.git remote -v

查看远程库的更详细的信息

39.git pull

抓取最新提交并试图合并分支

40.git branch --set-upstream-to=origin/dev dev

设置本地dev 与远程origin/dev分支的链接

41.git rebase

将本地分叉但未push的提交历史“整理”成一条直线

但是本地提交会被修改

42.git tag 标签名

给当前最新提交的commit

43.git tag

查看标签

44.git tag 标签名 commit id

对指定commit打标签

45.git  tag  -a  标签名  -m“ 说 明 ”   commit id

创建带有说明的标签

46.git show 标签名

查看指定标签信息

47.git tag -d 标签名

删除本地标签

48.git push origin 标签名

推送某个标签到远程

49.git push origin --tags

一次性推送全部尚未推送到远程的本地标签

50.git push origin :refs/tags/标签名

从远程删除标签名

51.git add -f 文件

强制添加文件到Git

52.git config --global alias.别名 原名

配置别名（对当前用户起作用）

53.git config alias.别名 原名

配置别名（只对当前仓库起作用）





