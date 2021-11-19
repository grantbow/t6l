      var cmds=[
       {cmd:["help fast"],
        count:0,
        tags:["t6l"],
        response:
                " OK hotshot, key commands to mastery are:\n"+
                " ls dir cd pwd cp copy rm mkdir rmdir del man apropos sudo lynx ssh ssh-keygen cat | echo more vi git set tmux irssi mount curl ps\n" } ,
       {cmd:["help site"],
        count:0,
        tags:["t6l"],
        response:
                " All commands are interpreted as lower case.\n"+
                " This helps newcomers learn.\n"+
                //" We keep anonymized data and use it solely for our own purposes.\n"+
                " t6l.website uses software we wrote, nodejs.org and nearlyfreespeech.net plus dependencies.\n"+
                " t6l.website is a javascript node app using if...else conditionals.\n" } ,
                //" t6l.website started as a flat javascript node app using else if clauses.\n"
       {cmd:["6", "6>", "prompt", "help prompt"],
        count:0,
        tags:["t6l", "cli"],
        response:
                " That's the prompt, characters indicating readiness to accept a command!\n"+
                " The computer program accepting the command is called the interpreter.\n"+
                " Different computers run different interpreter software programs.\n"+
                " The word terminal also has t123456l six characters between the first and last character." } ,
       {cmd:["ls","dir"],
        count:0,
        tags:["win","mac","linux","fs","basics"],
        response:
                " file1.js  file2.txt  file3.doc  pic.jpg  README\n\n"+
                "     GOOD!\n\n"+
                " The ls command just printed a \"listing\" of 5 files.\n"+
                " If this is your first command, congratulations!\n"+
                " Mysterious? Not really.\n"+
                //" We want to encourage you to feel confident using terminals.\n"+
                " We have taught this material before and\n"+
                "     are learning how people learn as you use this site.\n"+
                //"     For details type the command: help site\n"+
                " If this is NOT your first command try: help command\n\n"+
                " Now type the command: emoticon\n" } ,
       {cmd:[":-)"],
        count:0,
        tags:["history"],
        response: " try: emoticon\n" } ,
       {cmd:["help cursor", "cursor"],
        count:0,
        tags:["cli"],
        response: " The symbol the computer uses to signal where the next character you type will appear.\n" } ,
       {cmd:["help folder", "help subdirectory", "folder", "subdirectory"],
        count:0,
        tags:["fs"],
        response: " Computers organize files within a folder or subdirectory. Subdirectories are contained in a filesystem contained in a partition contained in a disk.\n" } ,
       {cmd:["help filesystem"],
        count:0,
        tags:["fs"],
        response: " Computers use the filesystem rules to store files and some information about files. filesystems are contained in a storage partition.\n" } ,
       {cmd:["help partition", "partition"],
        count:0,
        tags:["fs"],
        response: " Computer storage is often segemented into partitions. Partitions are contained in a storage disk.\n" } ,
       {cmd:["help disk", "disk"],
        count:0,
        tags:["fs"],
        response: " A disk is a physical storage device attached to your computer. It can be internal or external.\n" } ,
       {cmd:["help file", "file"],
        count:0,
        tags:["fs"],
        response: " A computer stores data in files. Files are organized within folders or subdirectories.\n" } ,
       {cmd:["emoticon","emoji"],
        count:0,
        tags:["history"],
        response:
                "\n:-)\n\n"+
                " Commands can simply print text like \"ls\" or \"emoticon.\"\n"+
                " We created this command. You can create commands soon.\n"+
                " If this is NOT your first command type the command: help command\n\n"+
                " To move forward quickly type the command: ls -al\n"+
                " To continue type the command: help emoticon\n" } ,
       {cmd:["help emoticon"],
        count:0,
        tags:["history"],
        response:
                " Using text to communicate has some history.\n"+
                " Before (somewhat recent) stickers in apps people learned to\n"+
                "     use characters to draw extremely simple picture icons to quickly convey emotions.\n"+
                " The : are the eyes, the - is the nose and ) is the smiling mouth.\n"+
                "     :-)\n"+
                " Emotive icons or emoticons are used in SMS (Simple Message Service) Text Messages.\n"+
                " You probably know this, but some people do not.\n"+
                " The \":-)\" was saved in a file and displayed when you typed the command.\n"+
                " Typing commands will become more familiar.\n"+
                " Now type the command: help learning\n" } ,
       {cmd:["help learning", "learning"],
        count:0,
        tags:["t6l","programming"],
        response:
                " There is a surprisingly steep learning curve to become comfortable typing commands.\n"+
                " The word \"command\" is used in two ways.\n"+
                " A command is specifically the first word you type. The others are called arguments.\n"+
                " The word \"command\" is also typically used to describe all words you type before pressing enter.\n"+
                " Using terminals is a big step toward programming.\n"+
                //" We are learning too. Your anonymous data will be used only for the purpose of improving the site.\n"+
                " Now type the command: help argument\n" } ,
       {cmd:["help argument"],
        count:0,
        tags:["cmd"],
        response:
                " Technical terminology can be a big hurdle. Stick with it!\n"+
                " You can come back to this later. To move forward quickly type the command: help command\n"+
                " All the words after the command are called arguments.\n"+
                " Two specific types of arguments are options and parameters.\n"+
                "     Options are arguments that tell a command how or modify how a command acts or change the output.\n"+
                "     Parameters are arguments that tell a command what to act upon.\n"+
                " Now type the command: ls -al\n" } ,
       {cmd:["ls -al"],
        count:0,
        tags:["mac","linux","basics"],
        response:
                "total 24\n"+
                " drwxr-xr-x 3 user user  4096 Apr 24 14:42 .\n"+
                " drwxr-xr-x 5 user user  4096 Apr 24 14:42 ..\n"+
                " -rw-r--r-- 1 user user   406 Apr 24 14:42 file1.js\n"+
                " -rw-r--r-- 1 user user    39 Apr 23 11:30 file2.txt\n"+
                " -rw-r--r-- 1 user user   201 Apr 24 12:29 file3.doc\n"+
                " -rw-r--r-- 1 user user   201 Apr 24 12:29 pic.jpg\n"+
                " -rw-r--r-- 1 user user 11411 Apr 24 16:21 README\n"+
                " drwxr-xr-x 1 user user  4096 Apr 24 16:21 subdir\n\n"+
                "    Using the ls or list command on Mac/Unix,\n"+
                "        option -a means list all including \"dot files\" and\n"+
                "        option -l means long list files.\n\n"+
                "    The two options are combined but could be provided as -a -l.\n"+
                "    The ls command without options simply prints the file names.\n"+
                "    The ls command with an argument only prints file names that match the argument.\n"+
                "    \"Dot files\" are files that begin with a period and are treated specially.\n"+
                "    Two special entries are . to specify the current directory and .. to specify the parent directory.\n"+
                " Now type the command: dir /a\n" } ,
       {cmd:["dir /a"],
        count:0,
        tags:["win","basics"],
        response:
                " Volume in Drive C is Win7\n"+
                " Volume Serial Number is 1234-ABCD\n"+
                "\n"+
                " Directory of C:\\Users\\user\\sampledir\n"+
                "\n"+
                "04/23/2017  04:41 PM    <DIR>          .\n"+
                "04/23/2017  04:41 PM    <DIR>          ..\n"+
                "04/24/2017  02:42 PM               406 file1.js\n"+
                "04/24/2017  11:30 AM                39 file2.txt\n"+
                "04/24/2017  12:29 PM               201 file3.doc\n"+
                "04/24/2017  12:29 PM               201 pic.jpg\n"+
                "04/24/2017  04:21 PM             11411 README\n"+
                "04/23/2017  04:41 PM    <DIR>          subdir\n"+
                "               5 File(s)            12 bytes\n"+
                "               3 Dir(s)   1,244,868,608 bytes free\n\n"+
                "    Using the dir or directory listing command on Windows,\n"+
                "        option /a shows attributes of files.\n\n"+
                " To move forward quickly type the command: help command\n"+
                " Now type the command: help option\n" } ,
       {cmd:["help option"],
        count:0,
        tags:["cmd"],
        response:
                " Good!\n"+
                " Option arguments are different because they use special characters.\n"+
                " Remember, options tell commands to act or print results differently.\n"+
                " The special characters are: / forward slash for Windows (and web) and - dash or -- for Mac/Unix.\n"+
                " Confused about slashes? Try: help slash\n"+
                " Now type the command: help parameter\n" } ,
       {cmd:["help parameter", "parameter"],
        count:0,
        tags:["cmd"],
        response:
                " Parameters are arguments that tell a command what to act upon.\n"+
                " Sometimes commands do not need any arguments.\n"+
                " If no arguments are provided, some commands will act using defaults. Others will error.\n"+
                " There are a few common types of parameters used by many commands\n"+
                " like file names, file paths, strings of text and regular expressions.\n"+
                " Unlike for humans, these arguments are not disagreements, reasoning or discussion.\n"+
                " Now type the command: help help\n" } ,
       {cmd:["help regex","help regular expression","help regexp"],
        count:0,
        tags:["regex"],
        response:
                " Regular expressions, sometimes regexp, are powerful.\n"+
                " They are a sequence of characters that define a search pattern used on other sequences of characters.\n"+
                " There are a few common syntaxes for writing them.\n"+
                " Google tries to \"find\" the most relevant information across the Internet matching a typed in string.\n"+
                " When \"matching\" there are similar options to more accurately specify search results.\n"+
                " While sometimes confused, file globbing is a common subset of regex defining a set of files.\n" } ,
       {cmd:[ "help slash", "help back slash", "help forward slash", "help backslash", "help forwardslash"],
        count:0,
        tags:["fs","web","basics"],
        response:
                " Windows and Mac/Unix use different slashes to separate things.\n"+
                " Windows uses backslash. \"\\\"\n"+
                " Mac, Unix and web URLs use forward slash. \"/\"\n"+
                " The separators are between directories and files.\n"+
                " A trailing separator specifies a folder/directory.\n"+
                " No trailing separator means a file.\n"+
                " Programmers sometimes use a backslash to help define specific characters within a string.\n"+
                " Now type the command: help path\n" } ,
       {cmd:[ "help path" ],
        count:0,
        tags:["win","mac","linux","fs","basics"],
        response:
                " Folders/directores with files are together called a path.\n"+
                " There are different kinds recognizable by context and use.\n"+

                " A filename is assumed to be in the current directory.\n"+
                " A filename alone is relative to (in) the current directory.\n"+
                " A relative path can look like a directory name, a separator and a filename.\n"+
                " A relative path can be a directory or file located near the current directory.\n"+
                " If you change the current directory the relative path changes.\n"+

                " An absolute path is a directory or file located near the top of the system.\n"+
                " If you change the current directory the absolute path does not change.\n"+
                " An absolute path begins with a drive letter in Windows like c:\\ or on Mac/Unix \/ called the root directory.\n"+
                " In Windows names like \\\\machine-name\\share\\dir\\file.txt are paths across a Windows network.\n"+

                " Now type: help url\n" } ,
       {cmd:[ "help url", "help universal resource locator" ],
        count:0,
        tags:["web"],
        response:
                " URL stands for Uniform Resource Locator.\n"+
                " These are web addresses.\n"+
                " While the specification is more complex, often\n"+
                "     business entities register and use their domain name.\n"+
                " We type this into a browser or search engine looking for what we want.\n"+
                " Now type: help help\n" } ,
       {cmd:[ "help help"],
        count:0,
        tags:["t6l"],
        response:
                " Commands often can print a summary of option and parameter arguments.\n"+
                " Windows often uses \/h. Mac/unix often use -h or --help.\n"+
                " Google, youtube and wikipedia are other ways to learn more about commands.\n"+
                " Some operating systems provide a separate help command.\n"+
                " In the olden days help instructions were printed on physical paper and called a manual.\n"+
                " Man pages on Mac/Unix systems are modeled on real physical paper and found by typing man <command>\n"+
                //"     help arguments available: 2|why|3|mastery|4|cli|help|desc|win|mac|unix|android|chrome|script|bat\n\n"+
                " Now type: help desc\n" } ,
      // // // older

      //{cmd:["help gigo" ],
      //  count:0,
      //  tags:[],
      //  response:
                //" Thinking in logical terms, commands have input, output and a special output for errors.\n"+
                //" An old acronym GIGO stands for Garbage In - Garbage Out.\n"+
                //" To get an expected output the inputs must be correct.\n"+
                //" This implies that if the output is bad look to correct the inputs.\n"+
                //" Input can be arguments or piped from the output of some other command.\n"+
                //" Output is performing some actions and/or printing some characters.\n"+
                //" Another output can be a numeric process exit/return code/status.\n"+
                //" If the command is provided some kind of bad inputs or encounters an error while running it may output an error.\n"+
                //" STDIN, STDOUT and STDERR are names used for these.\n"
                //" Now type the command: help\n"
      //{cmd:["help input" ],
      //  count:0,
      //  tags:[],
      //  response:
                //" A command often needs inputs to perform the intended action.\n"+
      //{cmd:["help pipe" ],
      //  count:0,
      //  tags:[],
      //  response:
                //" A pipe is how inputs are given to a command from the output of some other command.\n"+
      //{cmd:["help output" ],
      //  count:0,
      //  tags:[],
      //  response:
                //" A command often provides standard outputs and sometimes types of error outputs.\n"+
      //{cmd:["help error" ],
      //  count:0,
      //  tags:[],
      //  response:
                //" A command will print an error when it can not proceed or is given arguments that it can not use.\n"+
                //" Errors are intended to make clear exactly what went wrong and how to properly use that command.\n"+
                //"     help arguments available: 2|why|3|mastery|4|cli|help|desc|win|mac|unix|android|chrome|script|bat\n\n"+
                //" Now type: help 4\n"
       {cmd:["help files" ],
        count:0,
        tags:["basics"],
        response:
                " Commands \"ls -la\" and \"dir /a\" show that files keep some information about themselves.\n"+
                " This information can be useful. The specifics are stored in an arrangement called a file system.\n"+
                " Operating systems and conventions dictate how files and directories/folders are arranged.\n"+
                " After logging in you start in your own user directory.\n"+
                " File managers show the current directory/folder. Commands remember which \"working\" directory your command line is in.\n"+
                " This is sometimes displayed as part of the command prompt.\n" } ,
       {cmd:["goal", "why", "meaning", "meaning of life" ],
        count:0,
        tags:["t6l"],
        response:
                " Our goal is building confidence navigating, accessing, and changing folders and files on your OWN COMPUTER.\n"+
                " We will describe the basics then some example commands.\n"+
                " More detail is also available using the help command.\n"+
                " We believe the best way to learn is pratice.\n"+
                " Follow along and try these commands on your own computer\n"+
                "     with an open terminal/command line.\n"+
                " To learn how and where to launch a terminal type: help <win|mac|unix|android|chrome>\n\n"+
                " For further explanation type the command: help\n" } ,
       {cmd:["help", "continue"],
        count:0,
        tags:["t6l"],
        response:
                "     Good!\n\n"+
                " We start with basics so everyone can follow along.\n"+
                " This is a little slow in the beginning but you can't build a house upon a weak foundation.\n"+
                " The 6> is called a prompt. It tells you the terminal is ready for you to type a command.\n"+
                " The blinking square or underline is called a cursor.\n"+
                " The first word typed is the command.\n"+
                " The following words are called arguments. Two types of arguments are options and parameters.\n"+
                " Now type this command with it's argument: help command\n" } ,
      //},cmd:["help prompt" ],
      //  count:0,
      //  tags:["t6l"],
      //  response:
      //          //" Prompts, cursors and commands differ depending on the operating system and interpreter.\n\n"+
                //" The interpreter is the program that performs the actions behind the commands.\n"+
      //} else if ( typed_command === "help cursor" >,
                //" Behind the scenes, the 'interpreter' is the software program that gets your typing.\n"+
      //} else if ( typed_command === "help editcommand" >,
                //" Commands can be edited.\n"+
                //" Command history can greatly speed up giving your next command to the terminal.\n"+
      //} else if ( typed_command === "help why" >,
      //  res.end(
      //          " The purpose of this site is to help you use your computer better.\n"+
      //          " For those that already know how to use terminal software the site\n"+
      //          " can be used as a reference to give to others to improve their understanding and skills.\n"+
      //          " A terminal is still the fastest, most direct and most powerful way to interact with a computer.\n"+
      //          " Communicating using a terminal is more efficient and effective in accomplishing a wider range of tasks.\n"+
      //          " Learning how to use them well is a rite of passage for all serious IT people.\n\n"+
      //          " Now type the command with an argument: help command\n"
       {cmd:[ "help command", "helpcommand", "command"],
        count:0,
        tags:["cmd"],
        response:
        //if ( typed_command === "helpcommand" >,
        //        optionalspacereminder = spacetext;
        //}
        //        optionalspacereminder +
                " Commands are actions. They tell the computer what to do and/or provide output.\n"+
                " Commands can respond by simply printing something.\n"+
                " The most common commands (for common operating systems) are:\n"+
                " dir (Windows)       = list files in current directory/folder\n"+
                " ls  (Mac/Unix)      = list files in current directory/folder\n"+
                " cd  (Win/Mac/Unix)  =   change current directory/folder\n\n"+
                " copy (Win)    = copy file\n"+
                " cp (Mac/Unix) = copy file\n\n"+
                " del (Win)     = delete/remove file\n"+
                " rm (Mac/Unix) = delete/remove file\n\n"+
                " mkdir (Win/Mac/Unix)   = make directory\n\n"+
                " rmdir (Win/Mac/Unix)   = delete/remove directory\n\n"+
                " You can learn a lot with just these commands and a few arguments.\n"+
                //"     help arguments available: 2|why|3|mastery|4|cli|help|desc|win|mac|unix|android|chrome|script|bat\n\n"+
                " Now type: help mastery\n" } ,
       {cmd:["help mastery" ],
        count:0,
        tags:["t6l"],
        response:
                " Many tasks can be done quickly using graphical interfaces.\n"+
                " Some tasks can be done MUCH more quickly using command lines.\n"+
                " Some tasks can ONLY be done using command lines.\n"+
                " Your computer is capable of things discoverable only with a terminal and command line.\n"+
                " This becomes apparent working with computers over time.\n"+
                " Terminals enable deeper exploration.\n\n"+
                " Now type: help desc\n" } ,
       {cmd:["help desc" ],
        count:0,
        tags:["cmd", "t6l"],
        response:
                " When describing a command we use conventions.\n"+
                " A choice between things is separated by |, a vertical bar.\n"+
                " | in mathematics is a logical OR.\n"+
                " After a command, an optional argument is in [], square brackets.\n"+
                " Descriptions of arguments are inside <>.\n"+
                //"     help arguments available: 2|why|3|mastery|4|cli|help|desc|win|mac|unix|android|chrome|script|bat\n\n"+
                " Now type: help terminal\n" } ,
       {cmd:["help terminal", "terminal" ],
        count:0,
        tags:["t6l", "win", "mac", "linux", "basics", "cmd"],
        response:
                " Terminals can go by different names.\n"+
                " terminal - this is specifically the software that facilitates communication between a user and an interpreter.\n"+
                " t123456l = t6l aka terminal\n"+
                " black screen - the background color of the typical terminal\n"+
                " green screen - the background color of older physical terminals\n"+
                "              - for details type the command: help hardware\n"+
                " CLI - command line interface/interpreter\n"+
                " command line - the line with a prompt and a typed command\n"+
                " REPL - Read, Evaluate, Print & Loop, the computer actions.\n"+
                "        The Print means to print output and a new prompt.\n"+
                "        The Loop means wait to read the next command.\n"+
                "        Your actions are to read and type.\n"+
                " TUI - text user interface\n"+
                " GUI - graphical user interface\n"+
                " A mathematical name for an argument is a term. When studying any language the terminology can be half of the battle toward mastery.\n"+
                //"     help arguments available: 2|why|3|mastery|4|cli|help|desc|win|mac|unix|android|chrome|script|bat\n\n"+
                " Now type: help cli\n" } ,
       {cmd:["help hardware" ],
        count:0,
        tags:["basics", "history"],
        response:
                " Terminals of the past were hardware.\n"+
                " Software inside your graphical user interface is now used.\n"+
                " Now more specifically, the terminal is the software between the interpreter and you.\n"+
                " The way the terminal and computer communicate is called the terminal emulation. examples: vt100, xterm, ANSI\n"+
                " Computer hardware is controlled by an operating system.\n"+
                " Operating systems allow applications to run and users to interact with them.\n"+
                " Now type: help cli\n" } ,
       {cmd:["help interpreter", "interpreter" ],
        count:0,
        tags:["t6l","cmd"],
        response:
                " Interpreters are the actual software programs that read and respond to commands.\n"+
                " The interpreter for windows is cmd.exe.\n"+
                " The interpreter for mac or windows is usually the Bourne Again SHell aka bash.\n"+
                " Commands are provided in a scripting or programming language.\n"+
                " First each word is read. This is called parsing.\n"+
                " If errors are found during parsing then errors are provided as output.\n"+
                " Good errors can help pinpoint possible problems. Errors can be somewhat cryptic.\n"+
                " If accepted, the command is executed or run.\n"+
                " People talk about interpreted vs. compiled languages.\n"+
                " By comparison, compiled languages read source code and output\n"+
                " an intermediate form (binary) of the program for execution at a later time.\n" } ,
       {cmd:["help cli" ],
        count:0,
        tags:["t6l","cmd"],
        response:
                " Interpreters share many similarities.\n"+
                " A particular interpreter often runs on only one operating system.\n"+
                " A few interpreters can be installed on other operating systems.\n"+
                " Finally!!! Now let's look at the terminal on your computer.\n"+
                " Type: help <win|mac|unix|android|chrome>\n" } ,
       {cmd:[ "help mac", "help osx" ],
        count:0,
        tags:["mac", "cmd", "basics"],
        response:
                " The CLI on Mac OSX is called Terminal.app.\n"+
                " The ssh command is installed by default.\n" } ,
       {cmd:["help windows", "help win", "help win 10", "help win 7"],
        count:0,
        tags:["win", "basics"],
        response:
                " The CLI on Windows is called cmd.\n"+
                " This varies a little with each type of Windows.\n"+
                " Click Start...Run... and type cmd or\n"+
                " Click Start...All Programs...Accessories...Command Prompt.\n"+
                " The ssh command is not installed on Windows by default. Putty, cygwin or Git Bash are installable solutions.\n" } ,
       {cmd:[ "help linux", "help unix", "help bash", "help sh", "help shell"],
        count:0,
        tags:["cmd", "linux", "basics"],
        response:
                " The CLI provided on most unix is called terminal, console, xterm or similar.\n"+
                " This varies a little with each type of unix.\n"+
                " The ssh command is almost always installed by default.\n"+
                " For details about unix type: help *nix.\n" } ,
       {cmd:["help *nix" ],
        count:0,
        tags:["linux", "history"],
        response:
                " Unix can mean different things to different people.\n"+
                " We mean the term most broadly.\n"+
                " Broadly Unix incudes many operating systems that are similar\n"+
                " including all linux distributions.\n"+
                " Broadly, Unix includes Apple Mac OS (preinstalled) based on Darwin BSD (open source),\n"+
                " Appe iPhone iOS,\n"+
                " Google Android Linux,\n"+
                " Google Chrome OS (preinstalled) based on Google Chromium OS (open source).\n"+
                " The Google linux versions use software they have developed and\n"+
                " software from many linux distributions including Gentoo Linux.\n"+
                " The Linux kernel with many parts make up operating systems called linux distributions.\n"+
                " Example distributions are named Red Hat Enterprise Linux, Ubuntu, Debian, SUSE and Gentoo.\n"+
                " Many more distributions are listed on distrowatch.org.\n"+
                " Each of these have good wikipedia articles with details.\n" } ,
       {cmd:["help android" ],
        count:0,
        tags:["basics"],
        response:
                " The CLI on Android is not installed by default.\n"+
                //" The Play Store has 'Terminal Emulator for Android' by Jack Palevich.\n"+
                " The Play Store has 'Termux' by Fredrik Fornwall.\n"+
                " Install it then click it. If your phone is not rooted the commands are limited.\n"+
                " An app 'ConnectBot' is available for ssh. Other apps also can ssh.\n" } ,
       {cmd:["help chrome" ],
        count:0,
        tags:["web", "linux"],
        response:
                " The CLI on chromebooks is called crosh or ChRome Os SHell."+
                " Press Ctrl-Alt-T. Type shell to enable more commands.\n"+
                " If your chromebook is not yet in developer mode the commands are very limited.\n"+
                " The ssh command is installed by default.\n"+
                " A chrome extension 'Secure Shell' is available to make ssh access smoother.\n" } ,
       {cmd:[ "help script", "help bat", "help batch"],
        count:0,
        tags:["cmd", "programming"],
        response:
                " A script or batch file is simply a text file with commands in it.\n"+
                " It is run as if you were typing them.\n"+
                " It *IS* real programming.\n"+
                " Here is a Windows DOS command example:\n\n"+
                "     type Hello World!\n\n"+
                " Here is an Unix bash command example:\n\n"+
                "     #!/bin/bash\n"+
                "     echo \"Hello World!\"\n"+
                " The first line tells what program to run to interpret this file.\n"+
                " The second and following lines tell the commands to run.\n"+
                " Reading commands from a file and running them is called interpretation.\n" } ,
       {cmd:["help ssh" ],
        count:0,
        tags:["basics", "ssh", "net"],
        response:
                " To control a computer across a network you must:\n"+
                " 1. Connect to the computer across the network using an ssh client.\n"+
                " 2. The remote computer must run an sshd to accept the connection, login and run an interpreter.\n"+
                " 3. You must authenticate by providing a username and either a password or an ssh key.\n"+
                "    The process of authentication has evolved. Passwords are familiar.\n"+
                "    Matched public and private ssh keys can be used in place of passwords. This is more secure\n"+
                " Firewalls between computer networks can prevent ssh connections.\n" } ,
       {cmd:["help net", "net"],
        count:0,
        tags:["net"],
        response:
                " Some local commands can control computers across a network or transfer files.\n"+
                " This used to be done using unencrypted telnet which can still be handy for testing.\n"+
                " Now almost everyone uses ssh or Secure SHell. It encrypts the connection.\n"+
                " With the abilities of push, pull and execute many operations can be performed remotely.\n" } ,
       {cmd:["help sshkey" ],
        count:0,
        tags:["ssh"],
        response:
                " sshkey\n" },
       {cmd:["help chat" ],
        count:0,
        tags:["web", "net"],
        response:
                " chat\n" },
       {cmd:["help slack" ],
        count:0,
        tags:["net"],
        response:
                " slack\n" },
       {cmd:["help bot" ],
        count:0,
        tags:["web", "ai"],
        response:
                " bot\n" },
       {cmd:[ "forward", "right", "left", "back"],
        count:0,
        tags:["dungeon"],
        response:
                " Twisty passages all looking the same!\n", }, 
       {cmd:["help ai" ],
        count:0,
        tags:["ai"],
        response:
                " ai\n", }, 
       {cmd:["help freenode", "help freenode.net", "help libera", "help libera.chat", "libera.chat", "freenode.net" ],
        count:0,
        tags:["irc"],
        response:
                " Many channels are provided on libera.chat and freenode.net irc networks related to open source projects.\n" } ,
       {cmd:["help irc", "irc" ],
        count:0,
        tags:["irc"],
        response:
                " IRC stands for Internet Relay Chat. It was created in 1988 and is still in wide use.\n"+
                " It's now used for, among other things, collaboration building open source projects.\n"+
                " A popular system built for companies on top of IRC is slack.\n"+
                " Like command lines, IRC has commands that can be given using text commands.\n"+
                " Of 100 IRC networks, the one that is most popular for building software is called libera.chat.\n"+
                " A client is most often used to connect to an IRC network. They provide the most features.\n"+
                " Web based clients also exist, especially to help people get started.\n" } ,
       {cmd:["help irc-client" ],
        count:0,
        tags:["irc", "net"],
        response:
                "One of the easiest clients that works on Windows, Mac and Linux machines is available from http://pidgin.im.\n"+
                " A powerful text based IRC client is irssi.org available as a package using text based packaging tools.\n" } ,
       {cmd:["help cygwin" ],
        count:0,
        tags:["win", "linux"],
        response:
                "Cygwin is a system maintained by redhat.com that packages open source software ported to Windows.\n"+
                "Cygwin is sort of like a linux distribution that runs on Windows.\n" } ,
       {cmd:["help git" ],
        count:0,
        tags:["git"],
        response:
                " git is a revision control system (rcs), specifically a distributed version control system (dvcs)\n"+
                " created by and for Linux kernel programmers.\n" } ,
       {cmd:["help about" ],
        count:0,
        tags:["t6l"],
        response:
                " This site was written so others may learn how to use computers better.\n" } ,
       {cmd:["help faq" ],
        count:0,
        tags:["t6l"],
        response:
                " Frequently Asked Questions\n"+
                " Stay tuned. The list needs a good way to manage itself.\n" } ,
       {cmd:["help text", "help type", "help cat" ],
        count:0,
        tags:["t6l"],
        response:
                " Text files can be printed immediately.\n"+
                " type (Win)     = print file\n"+
                " cat (Mac/Unix) = print file\n" } ,
       {cmd:[ "help edit", "help editing", "help vi", "help vim", "help emacs", "help pico", "help editor", "help edlin", "help nano", "help micro" ],
        count:0,
        tags:["fs", "editing"],
        response:
                " Text files can be changed using a cli text editor.\n"+
                " edit (Win)    = edit file though this is no longer installed by default\n"+
                " vi (Mac/Unix) = edit file\n"+
                " There are many, many editors but the choice of cli editors is small. Windows in the past included edit and edlin.\n"+
                " When looking for an editor that has a gui I have heard good things about atom. Some older editors have come bundled with computer hardware like ispf editor, and xedit.\n"+
                " Others include but are not limited to emacs and derivatives, other vi derivatives, sublime, notepad, notepad++, textwranger, ultraedit, editpad pro, jedit, gedit, brackets, visual studio, bbedit, textmate, komodo, kate, geany, emeditor, nano, joe, the and kedit.\n" } ,
       {cmd:[ "help email"],
        count:0,
        tags:["t6l"],
        response:
                " We hope you find this site helpful. For discussion get in touch using t6l at t6l.website or grantbow at fedoraproject.org.\n" } ,
       {cmd:[ ""],
        count:0,
        tags:[],
        response:
            " Command \"\" is useless, try another one :-)\n" } ,
       {cmd:[ "set"],
        count:0,
        tags:[],
        response:
            " Environment variables:\n\n" } ,
       {cmd:[ "help list", "help cmd list"], // dynamic help list, dynamic help cmd list
        count:0,
        tags:[],
        response:
            " Command list:\n\n" } ,
       {cmd:[ "help tag list"], // dynamic help tag list
        count:0,
        tags:[],
        response:
            " Tag list: " } ,
       {cmd:[ "help tag"],
        count:0,
        tags:[],
        response:
            " Tags are a way to categorize things to find quickly. Type 'help tag list' to see command tags.\n" },
       {cmd:[ "help cmd"],
        count:0,
        tags:[],
        response:
            " Cmds are available commands. Type 'help list' or 'help cmd list' to see command tags.\n" },
      ];

exports.cmds = cmds;
