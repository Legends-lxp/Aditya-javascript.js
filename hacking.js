from userbot import *
from userbot.utils import *
import os
from asyncio import sleep
from telethon import events
from telethon.tl.functions.channels import JoinChannelRequest as Jcr, LeaveChannelRequest as Lcr

@bot.on(admin_cmd(pattern="Hello (.*)"))
@bot.on(sudo_cmd(pattern="Hello (.*)", allow_sudo=True))
async def _(event):
    name = event.pattern_match.group(1)
    if event.fwd_from:
        return
    animation_interval = 0.9
    animation_ttl = range(192)
    animation_chars = [
      
      
      
      f" legendhacker 💔❤️💔❤️💔❤️💔❤️💔❤️💔\n❤️💔❤️💔❤️💔❤️💔❤️💔❤️\n💔❤️💔..**{name}**..💔❤️💔\n❤️💔❤️💔❤️💔❤️💔❤️💔❤️\n💔❤️💔❤️💔❤️💔❤️💔❤️💔\n",
      f" legendhacker 💔❤️💔❤️💔❤️💔❤️💔❤️💔\n❤️💔❤️💔❤️💔❤️💔❤️💔❤️\n💔❤️💔..**{name}**..💔❤️💔\n❤️💔❤️💔❤️💔❤️💔❤️💔❤️\n💔❤️💔❤️💔❤️💔❤️💔❤️💔\n",
      f" legendhacker 💔❤️💔❤️💔❤️💔❤️💔❤️💔\n❤️💔❤️💔❤️💔❤️💔❤️💔❤️\n💔❤️💔..**{name}**..💔❤️💔\n❤️💔❤️💔❤️💔❤️💔❤️💔❤️\n💔❤️💔❤️💔❤️💔❤️💔❤️💔\n",
      f" legendhacker 💔❤️💔❤️💔❤️💔❤️💔❤️💔\n❤️💔❤️💔❤️💔❤️💔❤️💔❤️\n💔❤️💔..**{name}**..💔❤️💔\n❤️💔❤️💔❤️💔❤️💔❤️💔❤️\n💔❤️💔❤️💔❤️💔❤️💔❤️💔\n",
