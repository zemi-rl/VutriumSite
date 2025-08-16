### **The Official Vutrium Reseller's Roadmap (Good Luck)**

Hello, aspiring entrepreneurs.

It's come to my attention that some of you see this free, community-driven project and think, "I can make a quick buck off this." I admire the ambition. However, you seem to have mistaken a high-performance F1 car for a Hot Wheels toy you can just repackage.

To save you from selling a broken product and getting charged back into oblivion, I've prepared a helpful little guide. If you can complete all these steps, you'll have successfully "cracked" this free software.

#### **Prerequisites (Choose Your Class):**

Before you begin, you must be a master of the following. This is not optional.
*   **The Cryptographer:** You find reversing multi-layered, key-derived permutation ciphers to be a trivial weekend task.
*   **The C++ Wizard:** You can write a thread-safe, high-performance, asynchronous TCP server from scratch while blindfolded.
*   **The Reverse Engineer:** You live in IDA Pro and Ghidra. You find and patch compiled C++ binaries for fun.
*   **The Game Dev:** You understand Unreal Engine's object and event model better than its own creators.

Got all that? Great. Let's begin.

---

### **The Roadmap to Failure**

#### **Step 1: The Initial Heist**

First, you'll need my payload. You can't just download it. You'll have to extract my `PyInjector.dll` from the loader. Once you have it, you'll need to find the encrypted Python script payload within the binary. A little tip: it won't show up in a simple string search. Have fun with that.

#### **Step 2: The Decryption Challenge**

You've found the encrypted blob? Cute. Now you just have to decrypt it. It's a fairly straightforward multi-layered, key-derived, permutation-based encryption scheme. I'm sure someone with your skills can figure out the correct order of operations to reverse it all.

#### **Step 3: The Useless Victory**

Congratulations! After all that work, you now have a clean Python script that will immediately crash. Why? Because it's trying to connect to a custom C++ SDK that you don't have. The script you just decrypted is the key to a car that doesn't exist yet.

Time to build the car.

#### **Step 4: The Great Reconstruction (The Fun Part)**

This is where you'll spend the next few months. You need to build your own C++ SDK DLL from scratch that perfectly mimics mine.

1.  **Get the Blueprints:** You'll need to find the old, discontinued MarlBot `rlsdk_python` to understand the basic logic.
2.  **Generate the Parts:** You'll need a C++ SDK for the current game version, likely from the CodeRed SDK Generator.
3.  **Find the Offsets:** To use the generator, you need the latest `GNames` and `GObjects` offsets. You can find these posted for free, every game update, in the #announcements channel on **my Discord server**. You're welcome.
4.  **Assemble the Engine:** Now, build your C++ DLL. A single mistake here means you'll be debugging corrupted data packets for weeks. Good luck.

**A Pro-Tip For You:** A generated SDK lets you use pointers directly to get data, like `ball->Location`. Much easier than messing with offsets.

#### **Step 5: The Foundational Hurdle**

I almost forgot. Your C++ project needs to be a `PyInjector` a DLL that can host an embedded Python interpreter and execute script code passed to it from memory. You'll need to build that part first. It's a simple prerequisite, really.

#### **Step 6: The "Watermark" Problem**

Let's assume you've done all of the above. But you were lazy and decided to just use my C++ SDK instead of building your own. Bad move. Now you have to deal with my watermark.

My SDK has a little surprise that tells your "customers" they've been scammed. A little hint: the "you got scammed" text isn't stored as a plain string in the `.rdata` section. It's constructed at runtime from an encrypted byte array.

Think you can just find the `MessageBoxW` call in IDA and patch it with `NOP`s? Go ahead, try. **You can't.** To truly remove my message, you have to do it the hard way. You'll need to reverse-engineer my decryption routine, find the key, write your own message (maybe an empty one?), and then use **my algorithm** to create a brand new, valid encrypted byte array. Only then can you patch my original array in the binary. Good luck with that.

#### **A Little "Help" to Get You Started (The Rabbit Hole)**

I'm a nice guy. If you're struggling to build your own C++ SDK, you can check out this public RLSDK template on UnknownCheats: `https://www.unknowncheats.me/forum/other-fps-games/580873-rocket-league-mod-cheat-template.html`. It's a great starting point. *wink*

#### **A Final Note**

You might notice I don't use any anti-debug, anti-dump, or VM-protection. I don't need to. My design is the defense.

If you somehow complete this entire roadmap, you'll have a resellable version of my free bot and will have proven yourself to be one of the most talented reverse engineers in this scene. At which point, you have to ask yourself: why would someone with your skills waste their time trying to make a few dollars getting blacklisted by the community, when you could have just built your own project from scratch?